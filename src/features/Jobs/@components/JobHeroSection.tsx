import { motion } from "framer-motion";
import { blueTheme } from "../Jobs";

export const HeroSection = () => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center py-16 px-4 "
    >
        <h1 className="text-4xl font-bold mb-4">
            <span className={blueTheme.primary}>22 Jobs</span> Available Now
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Find your dream job from our curated list of opportunities across various industries and locations.
        </p>
    </motion.div>
);