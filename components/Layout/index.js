import SideBar from "../Sidebar/sideBar";
import styles from "../../styles/Home.module.css";
export default function Layout({children}) {
  return (
    <div >
      <SideBar/>
      <main className={styles.container}>
      {children}
      </main>
    </div>
  )
}
