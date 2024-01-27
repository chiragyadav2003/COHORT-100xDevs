
function ProfileCard({ imgurl, name, login, githubUrl }) {
    console.log(imgurl, name, login, githubUrl)
    return (
        <div className=' bg-black p-6 flex-col justify-center items-center w-[300px] h-[400px] mx-auto mt-8 border-white border-[2px] rounded-[20%]  '>
            <img className=' mx-auto rounded-[30%] size-[200px] ' src={imgurl} />
            <div className='flex justify-center items-center m-4 text-[20px]' >{name}</div>
            <div className='flex justify-center items-center m-4 text-[20px]' >{login}</div>
            <a className='mx-auto hover:shadow-lg hover:shadow-yellow-400 flex items-center justify-center bg-slate-500 rounded-md w-[150px] p-4 ' href={githubUrl}>Visit Profile</a>

        </div>
    )
}

export default ProfileCard