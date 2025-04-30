import { useSelector } from "react-redux"


const Profile = () => {
    const { user } = useSelector(state => state.user)
    return (
        <section className="w-full flex flex-col gap-4">
            <div className="profile-section p-4 border border-zinc-200 rounded-md">

                <div className="flex items-center gap-2">
                    <img src="https://placehold.co/86x86" alt="" className="w-[86px] h-[86px] rounded-full" />
                    <div>
                        <p className="text-xl font-bold">{user.name}</p>
                        <span className="capitalize text-accent font-bold">{user.role}</span>
                    </div>
                </div>

            </div>


        </section>
    )
}

export default Profile
