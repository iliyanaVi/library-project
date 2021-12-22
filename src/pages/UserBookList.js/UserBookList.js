import { useAuthContext } from "../../hooks/useAuthContext";
import { useCollection } from "../../hooks/useCollection";

export default function UserBookList(params) {
    const {user} =useAuthContext();
    const {documents,error} = useCollection('usersBookLists');
    return(
        <section>
            {error && <p>{error}</p>}
            {console.log(documents)}
        </section>
    )
}