import styles from '@/components/Header/heder.module.css'
import Link from 'next/link';

export default function Header() {
    return (
            <nav>
                <ul className={styles.header}>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/PlayerTauz">PlayerTauz</Link></li>
                    <li><Link href="/seteMinutoz">7MZ</Link></li>
                    <li><Link href="/useClickCounter">oi</Link></li>
                    <li><Link href="/useCounter">Contador</Link></li>
                    <li><Link href="/useDocumentTitle">Titulo</Link></li>
                    <li><Link href="/useLocalStorage">Local</Link></li>
                    <li><Link href="/useToggle">toggle</Link></li>
                </ul>
            </nav>
    )
}