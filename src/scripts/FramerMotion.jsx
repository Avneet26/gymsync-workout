import { motion, AnimatePresence } from 'framer-motion';

const FadingComponent = ({ children, keyId }) => {
    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={keyId}
                initial={{ opacity: 0.3 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0.3 }}
                transition={{ duration: 1, ease: 'ease' }}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    );
};


export default FadingComponent;
