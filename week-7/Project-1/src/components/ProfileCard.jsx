import "./ProfileCardStyle.css"

function ProfileCard() {
    let imgUrl = "https://th.bing.com/th/id/OIG2.NtHcJzyGCC4MmTcrCh18?w=270&h=270&c=6&r=0&o=5&pid=ImgGn"

    return (
        <div className="profile-container">
            <div style={{ display: "flex", flexDirection: "column", marginTop: "30%" }}>
                <img src={imgUrl} alt="Rita Correia" className="profile-picture" />
                <h2>Rita Correia <span style={{ fontSize: "80%", fontWeight: "normal" }}>32</span></h2>
                <p style={{ fontSize: "80%", fontWeight: "normal" }}>London</p>
            </div>

            <div className="downBorder"></div>
            <div className="stats">
                <div><strong>80K</strong> Followers</div>
                <div><strong>803K</strong> Likes</div>
                <div><strong>1.4K</strong> Photos</div>
            </div>

        </div>
    )
}

export default ProfileCard