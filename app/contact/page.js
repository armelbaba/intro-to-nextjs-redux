'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";
const Contact = () => {
    const router = useRouter()
    function projRedirect() {
       router.push('/projets')
    }
    return (
        <div>
            Ici c'est la page contact
            <div>
                {/* <button style={{backgroundColor:'red', height:'2rem'}} 
                onClick={projRedirect}>Aller vers projets</button> */}

            <Link href={{pathname:'/projets',query: {personne:JSON.stringify({nom:'Solo',prenom:'John'})}}}><button style={{backgroundColor:'red', height:'2rem'}}>
                Aller vers projets</button></Link>
            </div>
        </div>
    );
}

export default Contact;