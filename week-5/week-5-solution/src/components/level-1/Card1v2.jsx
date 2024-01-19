

function Card1v2({
    name,
    description,
    interestArray,
    linkedinLink = "https://www.linkedin.com/",
    twitterLink = "https://twitter.com/" }) {
    return (
        < div className="p-6 m-4 max-w-sm mx-auto bg-white rounded-xl shadow-xl flex items-center space-x-4" >
            <div>
                <h2 className="text-xl font-medium text-black">{name}</h2>
                <p className="text-gray-700">{description}</p>
                <br></br>
                <h3>Interest</h3>
                <ul className="list-disc list-inside">
                    {interestArray.map((interest, index) => <li key={index}>{interest}</li>)}
                </ul>
                <br></br>
                <a className=" p-3" href={twitterLink} target="_blank" rel="noopener noreferrer">
                    <button className="bg-blue-500  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded p">
                        Twitter
                    </button>
                </a>
                <a href={linkedinLink} target="_blank" rel="noopener noreferrer">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        LinkedIn
                    </button>
                </a>
            </div>
        </div >
    )
}

export default Card1v2



