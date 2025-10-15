'use client';
import { motion } from "motion/react"
import React from 'react'
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export default function ResumeButton() {
    return (
        <PDFDownloadLink
            document={<Document file='Tharny_Elilvannan_Resume_Fall2025.pdf' >
                <Page pageNumber={1} />
            </Document>}
            fileName="Tharny_Elilvannan_Resume_Fall2025.pdf" >
            <motion.button
                whileHover={{ scale: 1.2 }}
                onHoverStart={event => { }}
                onHoverEnd={event => { }}
                whileTap={{ scale: 0.95 }}
                className="text-center text-[#D9D3D7] ml-auto mr-auto text-bold font-mono"
            >
                <p className="">Download Resume :)</p>

            </motion.button>
        </PDFDownloadLink>
        /*<a
            href={'/Tharny_Elilvannan_Resume_Fall2025.pdf'}
            download='Tharny_Elilvannan_Resume_Fall2025.pdf'
            target="_blank"
            rel="noreferrer"
        >
            <motion.button
                whileHover={{ scale: 1.2 }}
                onHoverStart={event => { }}
                onHoverEnd={event => { }}
                whileTap={{ scale: 0.95 }}
                className="text-center text-[#D9D3D7] ml-auto mr-auto text-bold font-mono"
            >
                <p className="">Download Resume :)</p>

            </motion.button>
        </a>*/
    )
}