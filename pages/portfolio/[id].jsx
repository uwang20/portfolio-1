import {useRouter} from 'next/router'
import MainLayout from '../../src/layouts/MainLayout'
import Image from 'next/image'
import {useWorksState} from '../../src/store/useStore'
const Id = () => {
    const router = useRouter()
    const works = useWorksState(state => state.works)

    if (!router.query.id) {
        return (
        <div className="bg-[#EAE7D6]">
            <MainLayout>
                <div className="min-h-screen">
                    LOADING...
                </div>
            </MainLayout>
        </div>
        )
    }

    const work = works.find(work => work.id === Number(router.query.id))
    return (
        <div className="bg-[#EAE7D6]">
            <MainLayout>
                <div className="min-h-screen w-full py-20">
                    <div className="w-[900px] m-auto flex flex-col gap-16">
                        <div className="img-border bg-[#EA6035] rounded-md shadow-md  p-4">
                            <div className="img-container w-full relative aspect-[1/0.5] rounded-md overflow-hidden">
                                <Image src={work.imgUrl} alt="my_image" layout='fill' />
                            </div>
                        </div>
                        <div className="title-description">
                            <div className="title text-5xl mb-2">
                                {work.name}
                            </div>
                            <div className="description text-3xl">
                                {work.description}
                            </div>
                        </div>
                        <div className="techstack">
                            <div className="title text-3xl mb-2">Techstack</div>
                            <ul className="flex flex-wrap gap-4 text-2xl">
                                {
                                    work.techStack.map((tech, index) => {
                                        return (
                                            <li key={index} className="bg-[#EA6035] text-white py-1 px-6">{tech}</li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                        {
                            work.hasAccount &&
                            <div className="bg-[#1D3C58] text-white py-2 px-4 rounded-md">
                                <div className="">Use this fake account.</div>
                                <div className="fake-account">
                                    <div className="email-fk">Email: <span className="font-sans">{work.account.email}</span></div>
                                    <div className="password-fk">Password: <span className="font-sans">{work.account.password}</span></div>
                                </div>
                            </div>
                        }
                        <div className="visit text-2xl bg-[#EA6035] text-white w-max px-8 rounded-md py-2">
                            <a href={work.url} target="_blank" rel="noreferrer">Visit</a>
                        </div>
                    </div>
                </div>
            </MainLayout>
        </div>
    )
}

export default Id