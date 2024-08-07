import { Tweetcomp } from "@/components/TweetPage";
export default function Home() {
    return (
        <main className=" flex justify-center">
            <section className="w-fit flex flex-col gap-1.5 sm:w-1/2 md:w-1/2 lg:w-1/3 items-center p-3">
                <div className="w-48 md:w-auto">
                    <img src="/mg.png" className="w-full h-full object-cover" />
                </div>

                <p className="tracking-tight p-1">
                    {
                        "we're a group of friends on a mission to empower Nigeria through technology. At MossGrid, we're building both open-source and profit-driven software that addresses Nigeria's unique needs. Our goal is to create innovative solutions that enhance the lives of Nigerians and contribute to our digital independence. "
                    }
                </p>

                <p className="tracking-tight p-1">
                    our services status page is located <a href="https://mossgrid.github.io/sentinel"> Here </a>
                </p>

                <section className="w-full max-w-2xl mx-auto p-4">
                    <h2 className="text-xl font-bold mb-2 bg-gray-100 p-2 rounded">
                        Members
                    </h2>
                    <ul className="list-disc pl-5 mb-4">
                        <li>
                            <a
                                href="https://siji.vercel.app"
                                target="_blank"
                                className="text-blue-600 hover:underline"
                            >
                                Sijirama
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.adekunlesamuel.me"
                                target="_blank"
                                className="text-blue-600 hover:underline"
                            >
                                Fiyin
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.adigunsamuel.me"
                                target="_blank"
                                className="text-blue-600 hover:underline"
                            >
                                Dabira
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://tazmaheyot.vercel.app"
                                target="_blank"
                                className="text-blue-600 hover:underline"
                            >
                                Toye
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://ajalaferanmi.netlify.app"
                                target="_blank"
                                className="text-blue-600 hover:underline"
                            >
                                Feranmi
                            </a>
                        </li>
                    </ul>

                    <h2 className="text-xl font-bold mb-2 bg-gray-100 p-2 rounded">
                        Projects
                    </h2>
                    <ul className="list-disc pl-5">
                        <li>
                            <a
                                href="https://buymezobo.ng"
                                target="_blank"
                                className="text-blue-600 hover:underline"
                            >
                                Buymezobo: Support Nigerian creativity and innovation!
                            </a>
                        </li>
                        <li>
                            <a href="" className="text-blue-600 hover:underline">
                                Blendr (coming soon, hopefully Q4 2024)
                            </a>
                        </li>
                    </ul>
                </section>
                <div data-theme="light">
                    <Tweetcomp id={"1817618255386702301"} />
                    <Tweetcomp id={"1816827251628949936"} />
                    <Tweetcomp id={"1818908427537596612"} />
                </div>
            </section>
        </main>
    );
}
