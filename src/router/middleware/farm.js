export default function farm({ next, store }) {
    if (store.getters.user.role.role == "農民") {
        return next({
            name: 'farmback'
        })
    }

    return next()
}