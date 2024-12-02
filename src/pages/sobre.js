import Image from "next/image"
import styles from '../styles/About.module.css'

export default function Sobre(){
    return (
        <div className={styles.container}>
            <h1>Sobre o Projeto</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae tellus scelerisque, placerat lorem eu, tincidunt leo. Duis eget ligula condimentum, interdum nulla eu, fringilla enim. Quisque quis urna nisl. Sed a metus ligula. Sed vitae eros nec ligula placerat convallis in a sapien. Curabitur et nibh erat. </p>
            <Image src="/images/charizard.png" width="300" height="300" alt="Charizard"/>
        </div>
    )
}