// import google from "../../assets/icons/google.png"
import { signInWithPopup } from "firebase/auth"
import { auth, googleProvider } from "../../firebase/auth"
import { useNavigate } from "react-router-dom"



const Googlesignin = () => {


const navigate = useNavigate()

const signinWithGoogle = async() =>{
    try{
      await  signInWithPopup(auth,googleProvider)
      setTimeout(()=>{
        auth?.currentUser !== null && navigate("/dashboard");
      },2000)
    }catch(err){
      console.error(err)
    }
  }


  
    return (
      <>
      <div onClick={signinWithGoogle} className="cursor-pointer flex p-3 border border-spacing-1 items-center w-80 rounded-sm mt-5">
            {/* <img src={google} className="w-5 h-5 ml-2"/> */}
            <h1 className="ml-7">Continue with Google</h1>
        </div>
      </>
    )
  }
  
  export default Googlesignin
  