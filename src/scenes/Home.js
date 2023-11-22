import useMediaQuery from "../hooks/useMediaQuery"; 

const Home = ( {setSelectedPage }) => {
    const isAboveLarge = useMediaQuery("(min-width: 1060px)");

    return (
        <div>
            <div>
                {isAboveLarge ? (
                    <div>
                        <img
                            alt="home-bg"
                            src="assets/home-landing.png"
                        />
                    </div>
                ) : (
                    <div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Home;