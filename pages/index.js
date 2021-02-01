import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div style={{backgroundColor:'#ddd', height:'100vh', width:'100vw', display:'flex', flexDirection:'column', alignItems:'center',justifyContent:'center'}}>
      <div style={{width:'60%', borderRadius:4, height:'60vh',textAlign:'center', backgroundColor:'white', boxShadow:10 }}>
        <h1 style={{fontSize:100}}>
          Hi!
        </h1>
        <h3>Thank you for coming to my portfolio app.</h3>
        <p>This webapp is a simple CRUD that I've made using Next.JS for the frontend and Node.JS for the backend.</p>
        <p>Please click the menu at the top right corner of the page and then click 'Messages' to reach the CRUD functionality.</p>
        <h2>Please, do come again. =)</h2>
      </div>      
    </div>
  )
}
