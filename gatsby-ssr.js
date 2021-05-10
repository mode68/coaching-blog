import React from 'react';
import { AnimatePresence } from 'framer-motion';
export const wrapRootElement = ({ element }) => <AnimatePresence exitBeforeEnter>{element}</AnimatePresence>;
