import React from 'react';
import Firestore from '../FirebaseHooks/Firestore';
import { motion } from 'framer-motion';

const Album = ({ setSelectedImg }) => {
    const { docs } = Firestore('images');

    return (
        <div className="album">
            {docs && docs.map(doc => (
                <motion.div className="image-wrap" key={doc.id}
                    layout
                    whileHover={{ opacity: 1 }} s
                    onClick={() => setSelectedImg(doc.url)}
                >
                    <motion.img src={doc.url} alt="recent"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                    />
                </motion.div>
            ))}
        </div>
    )
}

export default Album;