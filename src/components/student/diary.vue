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
        <v-btn :to="{name: 'home'} " color="lime darken-2">
          <span class="white--text font-weight-black">登出</span>
        </v-btn>
      </div>
    </v-app-bar>
    <v-container fluid>
      <v-row class="px-12" style="height: 150px;" align="end" justify="start">
        <h1 class="display-2 brown--text text--darken-3 font-weight-black">我的日記</h1>
      </v-row>

      <v-row dense class="px-8" style="height: 150px;" align="start" justify="start">
        <v-col cols="5">
          <v-card flat color="grey lighten-5">
            <v-card-title>
              <p class="headline black--text font-weight-black" wrap>
                這裡是你跟老師、農夫的秘密日記天地喔！
                如果有什麼悄悄話都可以寫在這裡，也可以看以前的日記記錄。
              </p>
            </v-card-title>
          </v-card>
        </v-col>
      </v-row>

      <v-row height="auto" align="center" justify="start" class="px-12">
        <v-col cols="8">
          <v-sheet height="64">
            <v-toolbar flat color="grey lighten-5">
              <v-btn outlined class="mr-4" @click="setToday">Today</v-btn>
              <v-btn fab text small @click="prev">
                <v-icon small>mdi-chevron-left</v-icon>
              </v-btn>
              <v-btn fab text small @click="next">
                <v-icon small>mdi-chevron-right</v-icon>
              </v-btn>
              <v-toolbar-title>{{ title }}</v-toolbar-title>
              <v-spacer></v-spacer>
              <v-menu bottom right>
                <template v-slot:activator="{ on }">
                  <v-btn outlined v-on="on">
                    <span>{{ typeToLabel[type] }}</span>
                    <v-icon right>mdi-menu-down</v-icon>
                  </v-btn>
                </template>
                <v-list>
                  <v-list-item @click="type = 'day'">
                    <v-list-item-title>Day</v-list-item-title>
                  </v-list-item>
                  <v-list-item @click="type = 'week'">
                    <v-list-item-title>Week</v-list-item-title>
                  </v-list-item>
                  <v-list-item @click="type = 'month'">
                    <v-list-item-title>Month</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </v-toolbar>
          </v-sheet>
          <v-sheet height="600">
            <v-calendar
              ref="calendar"
              v-model="focus"
              color="primary"
              :events="events"
              :event-color="getEventColor"
              :event-margin-bottom="3"
              :now="today"
              :type="type"
              @click:event="showEvent"
              @click:more="viewDay"
              @click:date="viewDay"
              @change="updateRange"
            ></v-calendar>
            <v-menu
              v-model="selectedOpen"
              :close-on-content-click="false"
              :activator="selectedElement"
              full-width
              offset-x
            >
              <v-card color="grey lighten-4" min-width="350px" flat>
                <v-toolbar :color="selectedEvent.color" dark>
                  <v-btn icon>
                    <v-icon>mdi-pencil</v-icon>
                  </v-btn>
                  <v-toolbar-title v-html="selectedEvent.name"></v-toolbar-title>
                  <v-spacer></v-spacer>
                  <v-btn icon>
                    <v-icon>mdi-heart</v-icon>
                  </v-btn>
                  <v-btn icon>
                    <v-icon>mdi-dots-vertical</v-icon>
                  </v-btn>
                </v-toolbar>
                <v-card-text>
                  <span v-html="selectedEvent.details"></span>
                </v-card-text>
                <v-card-actions>
                  <v-btn text color="secondary" @click="selectedOpen = false">Cancel</v-btn>
                </v-card-actions>
              </v-card>
            </v-menu>
          </v-sheet>
        </v-col>
        <v-col cols="4">
          <v-card>
            <v-form @submit.prevent="uploaddiary" id="diary" v-model="diary">
            <v-textarea
              label="日記內容"
              background-color="amber lighten-4"
              auto-grow
              outlined
              rows="15"
              row-height="36"
            ></v-textarea>
            </v-form>

            <v-card-actions class="justify-center">
              <v-btn color="lime darken-2" type="submit" form="diary"> 
                <span class="title white--text font-weight-black" >儲存內容</span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>

      <v-spacer></v-spacer>
      <v-row height="auto" align="center" justify="center" class="px-12 py-4">
        <v-btn :to="{name: 'course'} " color="lime darken-2">
          <span class="title white--text font-weight-black">回個人主頁</span>
        </v-btn>
      </v-row>
    </v-container>

    <v-spacer></v-spacer>
    <v-footer color="brown darken-3">
      <h1 class="subtitle-1 font-weight-regular white--text">聯絡我們</h1>
      <v-spacer></v-spacer>
      <h1 class="subtitle-1 font-weight-regular white--text">© 2019 URBANMAN All Rights Reserved.</h1>
    </v-footer>
  </v-app>
</template>


<script>
import { mapGetters } from "vuex";
import { db } from "../../db";

const fStore = db.firestore();

export default {
  
  data: () => ({
    diary: "",
    today: "2019-11-17",
    focus: "2019-11-17",
    type: "month",
    typeToLabel: {
      month: "month",
      week: "week",
      day: "day"
    },
    start: null,
    end: null,
    selectedEvent: {},
    selectedElement: null,
    selectedOpen: false,
    events: [
      {
        name: "合作松",
        details: "食農合作松2019",
        start: "2019-11-16",
        end: "2019-11-17",
        color: "lime darken-2"
      },
      {
        name: "古坑有機橘子生長",
        start: "2019-08-11",
        end: "2019-11-17",
        color: "orange darken-2"
      },
      {
        name: "小林先生的草莓日記",
        start: "2019-11-25",
        end: "2020-01-14",
        color: "red accent-2"
      }
    ]
  }),
  computed: {
    title() {
      const { start, end } = this;
      if (!start || !end) {
        return "";
      }

      const startMonth = this.monthFormatter(start);
      const endMonth = this.monthFormatter(end);
      const suffixMonth = startMonth === endMonth ? "" : endMonth;

      const startYear = start.year;
      const endYear = end.year;
      const suffixYear = startYear === endYear ? "" : endYear;

      const startDay = start.day + this.nth(start.day);
      const endDay = end.day + this.nth(end.day);

      switch (this.type) {
        case "month":
          return `${startMonth} ${startYear}`;
        case "week":
        case "4day":
          return `${startMonth} ${startDay} ${startYear} - ${suffixMonth} ${endDay} ${suffixYear}`;
        case "day":
          return `${startMonth} ${startDay} ${startYear}`;
      }
      return "";
    },
    monthFormatter() {
      return this.$refs.calendar.getFormatter({
        timeZone: "UTC",
        month: "long"
      });
    },
    ...mapGetters({
      user: "user"
    })
  },
  mounted() {
    this.$refs.calendar.checkChange();
  },
  methods: {
    viewDay({ date }) {
      this.focus = date;
      this.type = "day";
    },
    getEventColor(event) {
      return event.color;
    },
    setToday() {
      this.focus = this.today;
    },
    prev() {
      this.$refs.calendar.prev();
    },
    next() {
      this.$refs.calendar.next();
    },
    showEvent({ nativeEvent, event }) {
      const open = () => {
        this.selectedEvent = event;
        this.selectedElement = nativeEvent.target;
        setTimeout(() => (this.selectedOpen = true), 10);
      };

      if (this.selectedOpen) {
        this.selectedOpen = false;
        setTimeout(open, 10);
      } else {
        open();
      }

      nativeEvent.stopPropagation();
    },
    updateRange({ start, end }) {
      // You could load events from an outside source (like database) now that we have the start and end dates on the calendar
      this.start = start;
      this.end = end;
    },
    nth(d) {
      return d > 3 && d < 21
        ? "th"
        : ["th", "st", "nd", "rd", "th", "th", "th", "th", "th", "th"][d % 10];
    },
    uploaddiary() {
      fStore
        .collection("diary")
        .add({
          content: this.diary,
          name: this.$store.getters.user.data.displayName
        })
        .then(() => {
          this.$router.push({ name: "student" });
        })
        .catch(err => {
          this.error = err.message;
        });
    }
  }
};
</script>

