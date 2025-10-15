import { motion } from "motion/react"

export default function HomeTitle() {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            className="homepageTitle mr-auto flex ml-auto xs:mt-[20%] sm:mt-[20%] md:mt-[20%] lg:mt-[10%] xl:mt-[10%] sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl"
            transition={{
                duration: 0.4,
                scale: { type: "spring", visualDuration: 0.4, bounce: 0.6 },
            }}>Hello!</motion.div>
    )
}