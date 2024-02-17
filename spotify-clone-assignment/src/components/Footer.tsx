import styles from "../../styles/library.module.css"


const Footer = () => {
    const data = [
        {
            title:'Legal'
        },
        {
            title:'Privacy Center'
        }
        ,{
            title:'Privacy policiy'
        },{
            title:'Cookies'
        },{
            title:'About Ads'
        },{
            title:'Assalibility'
        }
        ,{
            title:'Cookies'
        }
    ]
  return (
    <div className={styles.footerList}>
        {
            data.map((value: { title: string; }) => (
                 <div >{value.title}</div>
            ))
        }
        </div>
  )
}

export default Footer