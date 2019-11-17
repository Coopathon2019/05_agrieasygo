export default function stu({ next, store }) {
    if (store.getters.user.role.role == "學生") {
        return next({
            name: 'studentback'
        })
    }

    return next()
}