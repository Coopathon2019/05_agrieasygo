export default function tea({ next, store }) {
    if (store.getters.user.role.role == "老師") {
        return next({
            name: 'teacherback'
        })
    }

    return next()
}