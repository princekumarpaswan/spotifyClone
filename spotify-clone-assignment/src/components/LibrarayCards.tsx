import styles from "../../styles/library.module.css"

const LibrarayCards = () => {

    const data =[
        {
          title: "Create Your first PlayList",
          content: "it's easy, we will help you",
          buttonText: 'Create playlist'
        },
        {
          title: "Create Your first PlayList",
          content: "it's easy, we will help you",
          buttonText: 'Create playlist'
        }
      ]
    

  return (
    <div className={styles.cardOuterDiv} >
        {
            data.map((value: { title: string; content: string; buttonText: string; }) => (
                <div key={value.title}>
                    <h3 className='bg-[#242424] text-lg	 font-[700]' >{value.title}</h3>
                    <p className='bg-[#242424] mt-[-10px]'>{value.content}</p>
                    <button className="bg-[white] mt-[10px] text-[black] w-[125px] p[1px] rounded-xl font-medium	h-[30px]  " >{value.buttonText}</button>
                </div>
            ))
        }
    </div>
  )
}

export default LibrarayCards;
