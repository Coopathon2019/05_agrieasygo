<template>
  <v-app>
    <v-app-bar app color="white">
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title class="display-1 font-weight-black amber--text text--accent-4 mr-2">食農</v-toolbar-title>
      <span></span>
      <v-toolbar-title class="headline font-weight-black">
        <span class="lime--text text--darken-2">easy-go</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <v-toolbar-title class="title font-weight-regular mr-4">
        <span class="black--text">{{user.data.displayName}}</span>
      </v-toolbar-title>

      <div class="text-center" cols="12" sm="4">
        <v-btn :to="{name: 'farmer'} " color="lime darken-2">
          <span class="white--text font-weight-black">回個人主頁</span>
        </v-btn>
      </div>
      <div class="text-center" cols="12" sm="4">
        <v-btn :to="{name: 'home'} " color="lime darken-2">
          <span class="white--text font-weight-black">登出</span>
        </v-btn>
      </div>
    </v-app-bar>

    <v-container fluid>
      <v-row class="px-12" style="height: 120px;" align="end" justify="start">
        <h1 class="display-1 font-weight-black light-green--text text--darken-4">您打算發佈什麼樣的農作物資訊?</h1>
      </v-row>

      <form>
        <v-row class="px-12" align="center" justify="center">
          <v-col cols="12" md="6">
            <v-text-field
              v-model="cname"
              label="專案名稱 可以加上分組編號喔"
              required
              @input="$this.cname.$touch()"
              @blur="$this.cname.$touch()"
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="6">
            <v-text-field
              v-model="ctype"
              label="作物種類 大分類即可"
              required
              @input="$this.ctype.$touch()"
              @blur="$this.ctype.$touch()"
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="6">
            <v-text-field
              v-model="ctime"
              label="預計採收日期"
              type="date"
              required
              @input="$this.ctime.$touch()"
              @blur="$this.ctime.$touch()"
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="6">
            <v-text-field
              v-model="cnum"
              label="預計提供農作數量(斤)"
              required
              @input="$this.cnum.$touch()"
              @blur="$this.cnum.$touch()"
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="6">
            <v-text-field v-model="ctext" label="專案特色解說 可以說說你的生態農法喔 " required></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field v-model="cmail" label="聯絡信箱資訊 " required></v-text-field>
          </v-col>

          <!--<v-select
            v-model="select"
            :items="items"
            :error-messages="selectErrors"
            label="Item"
            required
            @change="$v.select.$touch()"
            @blur="$v.select.$touch()"
          ></v-select>
          -->
          <v-col cols="12" md="12">
            <p>農作物圖片上傳</p>

            <form ref="form">
              <input
                id="files"
                type="file"
                name="file"
                ref="uploadInput"
                accept="image/*"
                :multiple="false"
                @change="detectFiles($event)"
              />
            </form>
            <v-img v-if="uploadEnd" :src="downloadURL" contain></v-img>
            <div v-if="uploadEnd">
              <v-btn class="ma-0" dark small color="error" @click="deleteImage()">Delete</v-btn>
            </div>
          </v-col>

          <v-btn color="lime darken-2" class="mr-4" @click="submit">
            <span class="title white--text font-weight-black">資訊提交</span>
          </v-btn>

          <v-btn color="lime darken-2" class="mr-4" @click="clear">
            <span class="title white--text font-weight-black">清除</span>
          </v-btn>
        </v-row>
      </form>
    </v-container>
  </v-app>
</template>


<script>
import { db } from "../db";
import { mapGetters } from "vuex";

const fStore = db.firestore();

const firestorage = db.storage();

export default {
  computed: {
    // map `this.user` to `this.$store.getters.user`
    ...mapGetters({
      user: "user"
    })
  },

  props: ["oldImgUrl"],
  data() {
    return {
      progressUpload: 0,
      fileName: "",
      uploadTask: "",
      uploading: false,
      uploadEnd: false,
      downloadURL: "",

      cname: "",
      ctype: "",
      ctime: "",
      cdollar: "",
      cnum: "",
      cfre: "",
      ctext: "",
      cmail: ""
    };
  },

  created() {
    if (this.oldImgUrl) this.setCoverImgOnUpdate();
  },
  methods: {
    selectFile() {
      this.$refs.uploadInput.click();
    },
    detectFiles(e) {
      let fileList = e.target.files || e.dataTransfer.files;
      Array.from(Array(fileList.length).keys()).map(x => {
        this.upload(fileList[x]);
      });
    },
    upload(file) {
      this.fileName = file.name;
      this.uploading = true;
      this.uploadTask = firestorage.ref("images/" + file.name).put(file);
    },
    deleteImage() {
      if (this.oldImgUrl === "") {
        this.deleteImgOnFirebase();
      } else {
        this.deleteImgOnUpdate();
      }
      this.$refs.form.reset();
    },
    setCoverImgOnUpdate() {
      this.uploadEnd = true;
      this.downloadURL = this.oldImgUrl;
    },
    deleteImgOnFirebase() {
      firestorage
        .ref("images/" + this.fileName)
        .delete()
        .then(() => {
          this.uploading = false;
          this.uploadEnd = false;
          this.downloadURL = "";
        })
        .catch(error => {
          console.error(`file delete error occured: ${error}`);
        });
    },
    deleteImgOnUpdate() {
      this.uploading = false;
      this.uploadEnd = false;
      this.downloadURL = "";
    },

    submit() {
      fStore
        .collection("information")
        .add({
          cname: this.cname,
          ctype: this.ctype,
          ctime: this.ctime,
          cdollar: this.cdollar,
          cnum: this.cnum,
          cfre: this.cfre,
          ctext: this.ctext,
          cmail: this.cmail,
          cimgname: this.fileName
        })
        .then(() => {
          this.$router.push({ name: "farmer" });
        })
        .catch(err => {
          this.error = err.message;
        });
    },

    clear() {
      this.cname = "";
      this.ctype = "";
      this.ctime = "";
      this.cdollar = "";
      this.cnum = "";
      this.cfre = "";
      this.ctext = "";
      this.cmail = "";
    }
  },

  watch: {
    uploadTask: function() {
      this.uploadTask.on(
        "state_changed",
        sp => {
          this.progressUpload = Math.floor(
            (sp.bytesTransferred / sp.totalBytes) * 100
          );
        },
        null,
        () => {
          this.uploadTask.snapshot.ref.getDownloadURL().then(downloadURL => {
            this.uploadEnd = true;
            this.downloadURL = downloadURL;
            this.$emit("downloadURL", downloadURL);
          });
        }
      );
    }
  }
};
</script>