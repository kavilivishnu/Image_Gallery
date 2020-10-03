import React, { useEffect } from 'react';
import Storage from '../FirebaseHooks/Storage';
import { motion } from 'framer-motion';

const Loading = ({ file, setFile }) => {
    const { loading, url } = Storage(file);

    useEffect(() => {
        if (url) {
            setFile(null);
        }
    }, [url, setFile]);

    return (
        <motion.div className="loading"
            initial={{ width: 0 }}
            animate={{ width: loading + '%' }}
        ></motion.div>
    );
}

export default Loading;