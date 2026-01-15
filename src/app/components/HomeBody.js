import { motion } from "motion/react"

export default function HomeBody() {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            className="homepageBody sm:mt-[-20%] md:mt[-30%] lg:mt-[-10%] xl:mt-[-10%] flex mr-auto ml-auto sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-center"
            transition={{
                duration: 0.4,
                scale: { type: "spring", visualDuration: 0.4, bounce: 0.6 },
            }}>I'm Tharani, and I'm a third year Software Engineering student at McMaster University.</motion.div>
    )
}