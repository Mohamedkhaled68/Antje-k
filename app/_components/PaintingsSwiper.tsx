"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCards } from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import useSliderStore from "@/store/useSliderStore";

type Painting = {
    id: string;
    image: string;
    text: string;
    name: string;
    paintWay: string;
    size: string;
};

const PaintingsSwiper = () => {
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [showContact, setShowContact] = useState(false);

    const { setCurrentSlide, setChoosenSlide, currentSlide } = useSliderStore(
        (state) => state
    );

    const paintings = [
        {
            id: "8888",
            image: "/assets/images/painting.webp",
            text: `Set against a tranquil light blue backdrop, cascading
                        drips and delicate streaks of green, red, yellow,
                        orange, and pink create a rhythmic vertical flow—evoking
                        the graceful descent of rain or even the pulse of a
                        heartbeat. The painting gives a sense of movement and
                        fluidity, with the vertical lines resembling paint
                        dripping down the canvas. A perfect statement for collectors seeking art
                        that resonates with energy, emotion, and elegant
                        complexity.`,
            name: "Lake of Calm Waters",
            paintWay: "Acrylic on Canvas",
            size: '42" x 72"',
        },
        {
            id: "5555",
            image: "/assets/images/painting2.webp",
            text: `Set against a tranquil light blue backdrop, cascading
                        drips and delicate streaks of green, red, yellow,
                        orange, and pink create a rhythmic vertical flow—evoking
                        the graceful descent of rain or even the pulse of a
                        heartbeat. The painting gives a sense of movement and
                        fluidity, with the vertical lines resembling paint
                        dripping down the canvas. A perfect statement for collectors seeking art
                        that resonates with energy, emotion, and elegant
                        complexity.`,
            name: "Lake of Calm Waters",
            paintWay: "Acrylic on Canvas",
            size: '42" x 72"',
        },
    ];

    // Find current painting based on currentSlide ID
    const currentPainting = paintings.find(
        (painting) => painting.id === currentSlide
    );

    const handleClick = () => {
        if (isFullscreen) {
            setShowContact(true);
        } else {
            setChoosenSlide(currentSlide!);
            setIsFullscreen(true);
        }
    };

    const handleCloseFullscreen = () => {
        setIsFullscreen(false);
        setShowContact(false);
    };

    return (
        <>
            {/* <AnimatePresence>
                {isFullscreen && currentPainting && (
                    <motion.div
                        className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <button
                            onClick={handleCloseFullscreen}
                            className="absolute top-6 right-6 text-white text-3xl"
                            aria-label="Close fullscreen view"
                        >
                            ×
                        </button>

                        <motion.div
                            className="w-full h-full p-8 flex flex-col md:flex-row items-center justify-center gap-8"
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.9 }}
                        >
                            <div className="w-full md:w-2/3 h-2/3 md:h-full">
                                <img
                                    src={currentPainting.image}
                                    alt={currentPainting.name}
                                    className="w-full h-full object-contain"
                                />
                            </div>

                            <div className="w-full md:w-1/3 text-white p-4">
                                <h1 className="text-4xl md:text-5xl font-bold italic mb-2">
                                    {currentPainting.name}
                                </h1>
                                <p className="text-2xl italic text-gray-300 mb-4">
                                    {currentPainting.size} -{" "}
                                    {currentPainting.paintWay}
                                </p>
                                <p className="text-lg md:text-xl italic mb-8">
                                    {currentPainting.text}
                                </p>
                                <div className="flex flex-col space-y-4">
                                    <p className="text-2xl font-bold">$14.55</p>
                                    <button className="cursor-pointer text-[20px] font-normal text-white font-serif px-[48px] py-[20px] rounded-[165px] border border-white/40 bg-[linear-gradient(108deg,_#505050_3.37%,_#1D1D1D_95.93%)] shadow-[0px_5px_10px_0px_rgba(0,0,0,0.30)]">
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence> */}
            <AnimatePresence>
                {isFullscreen && currentPainting && (
                    <motion.div
                        className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            initial={{ opacity: 0, y: -1000 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                type: "tween",
                                ease: "easeInOut",
                                duration: 0.8,
                            }}
                            className="z-[100] px-8 py-2 absolute top-5 left-[50%] translate-x-[-50%] w-[80%]  flex justify-between items-center ror"
                        >
                            <button
                                onClick={handleCloseFullscreen}
                                className=" text-white text-3xl cursor-pointer"
                                aria-label="Close fullscreen view"
                            >
                                <>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="50"
                                        height="59"
                                        viewBox="0 0 103 59"
                                        fill="none"
                                    >
                                        <g clipPath="url(#clip0_4760_4165)">
                                            <path
                                                d="M22.3445 35.7733C23.1309 35.0635 23.2723 34.6685 23.637 34.4609C51.3541 26.3954 79.2309 28.5688 106.642 43.5391C113.572 47.3035 119.544 52.6615 124.393 59.131C134.899 72.9205 135.649 90.164 126.394 102.772C121.611 109.374 115.768 114.744 107.418 116.98C103.842 114.662 100.351 112.244 96.8306 110.315C91.0744 107.194 85.1149 106.128 79.2004 108.183C74.7719 109.602 72.2415 112.616 72.6784 115.723C73.2519 119.801 76.3782 122.426 80.0427 123.277C85.1338 124.47 90.339 125.073 95.4053 125.389C98.6802 125.57 102.042 124.968 105.235 124.567C116.418 136.87 112.752 152.117 96.7083 160.566C94.5844 159.467 92.3489 158.275 90.1408 157.277C81.8663 153.753 73.7211 153.25 66.3157 157.307C63.4825 158.867 61.0388 161.097 61.6967 165.075C62.2179 168.081 65.3442 170.707 69.82 171.725C76.9258 173.24 83.6765 172.229 90.2337 170.543C92.5037 169.88 94.7738 169.217 96.9322 168.461C114.785 186.879 115.387 214.274 94.5823 223.178C96.1182 224.296 97.262 225.428 98.2693 225.589C99.4726 225.743 100.847 225.013 101.829 224.297C110.785 217.26 116.332 208.388 114.892 196.046C113.889 186.812 110.42 178.246 105.13 170.036C104.378 168.891 103.626 167.745 102.958 166.5C102.847 166.406 102.904 166.111 102.906 165.428C103.777 164.618 104.705 163.513 105.856 162.596C119.503 151.107 121.388 140.701 112.66 122.753C114.119 121.923 115.747 120.892 117.401 120.055C126.799 114.759 133.517 107.213 137.193 96.9411C143.215 80.2475 137.962 61.7913 123.313 47.9477C115.36 40.413 106.225 34.9676 96.1317 31.1157C71.6955 21.8981 47.7363 20.2743 24.3584 28.3873C23.1254 28.722 21.9197 29.2508 20.6866 29.5855C20.4906 29.5922 20.183 29.505 19.26 29.2438C21.2346 25.0788 24.2686 22.1461 27.191 19.1197C29.9174 16.1 32.9514 13.1673 36.0424 9.94002C32.8864 7.80341 30.5891 8.27185 28.4853 9.41667C26.1284 10.8628 23.5483 12.1214 21.7497 14.0364C16.9717 19.2724 12.221 24.7026 7.91699 30.5079C4.62508 35.1079 6.18095 38.4698 11.6914 39.8433C23.4119 42.6641 35.2168 45.3845 47.0216 48.1048C48.9519 48.527 50.8275 48.5607 53.3185 48.7686C52.4647 44.7975 50.0035 44.1007 47.7383 43.3973C39.3473 41.1461 31.2094 38.5937 22.3445 35.7733ZM67.5766 164.874C74.4014 158.788 82.941 158.595 90.1165 164.107C82.887 165.914 76.1612 167.802 67.5766 164.874ZM78.7793 116.393C85.3188 111.78 92.1467 112.719 98.4514 119.041C91.6734 119.857 85.5404 120.359 78.7793 116.393Z"
                                                fill="#fff"
                                            />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_4760_4165">
                                                <rect
                                                    x="102.96"
                                                    width="58.08"
                                                    height="102.96"
                                                    rx="29.04"
                                                    transform="rotate(90 102.96 0)"
                                                    fill="white"
                                                />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </>
                            </button>
                            <div className="flex flex-col items-center">
                                <h1 className="text-[36px] text-white md:text-5xl font-bold italic mb-2">
                                    {currentPainting.name}
                                </h1>
                                <p className="text-[20px] italic text-gray-300 mb-4">
                                    {currentPainting.paintWay} -{" "}
                                    {currentPainting.size}
                                </p>
                            </div>
                            <p className="text-[36px] font-bold text-white">
                                $14.55
                            </p>
                        </motion.div>

                        {showContact && (
                            <div className="z-[90] p-8 w-full h-full flex justify-center items-center absolute top-0 left-0 transition-opacity duration-300">
                                {/* Background blur layer */}
                                <div className="absolute w-full h-full top-0 left-0 mkd transition-all duration-300" />

                                {/* Text content (not blurred) */}
                                <div className="w-[50%] mx-auto text-[24px] font-normal italic text-white z-40 relative">
                                    <h1 className="text-white text-[26px] text-center">
                                        Info@contact.com
                                    </h1>
                                </div>
                            </div>
                        )}

                        <motion.div
                            className="w-full h-full bg-blue-600"
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.9 }}
                        >
                            <div className="w-full h-full">
                                <img
                                    src={currentPainting.image}
                                    alt={currentPainting.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
            <div className="relative w-full container mx-auto">
                <button
                    className="swiper-button-prev-me cursor-pointer disabled:cursor-none disabled:pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 z-10 transition-opacity duration-300 hover:opacity-100 focus:opacity-100 focus:outline-none"
                    aria-label="Previous slide"
                    disabled={isBeginning}
                >
                    {isBeginning ? (
                        <>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="50"
                                height="59"
                                viewBox="0 0 103 59"
                                fill="none"
                            >
                                <g opacity="0.3">
                                    <g clipPath="url(#clip0_4760_4171)">
                                        <path
                                            d="M22.3445 35.7733C23.1309 35.0635 23.2723 34.6685 23.637 34.4609C51.3541 26.3954 79.2309 28.5688 106.642 43.5391C113.572 47.3035 119.544 52.6615 124.393 59.131C134.899 72.9205 135.649 90.164 126.394 102.772C121.611 109.374 115.768 114.744 107.418 116.98C103.842 114.662 100.351 112.244 96.8306 110.315C91.0744 107.194 85.1149 106.128 79.2004 108.183C74.7719 109.602 72.2415 112.616 72.6784 115.723C73.2519 119.801 76.3782 122.426 80.0427 123.277C85.1338 124.47 90.339 125.073 95.4053 125.389C98.6802 125.57 102.042 124.968 105.235 124.567C116.418 136.87 112.752 152.117 96.7083 160.566C94.5844 159.467 92.3489 158.275 90.1408 157.277C81.8663 153.753 73.7211 153.25 66.3157 157.307C63.4825 158.867 61.0388 161.097 61.6967 165.075C62.2179 168.081 65.3442 170.707 69.82 171.725C76.9258 173.24 83.6765 172.229 90.2337 170.543C92.5037 169.88 94.7738 169.217 96.9322 168.461C114.785 186.879 115.387 214.274 94.5823 223.178C96.1182 224.296 97.262 225.428 98.2693 225.589C99.4726 225.743 100.847 225.013 101.829 224.297C110.785 217.26 116.332 208.388 114.892 196.046C113.889 186.812 110.42 178.246 105.13 170.036C104.378 168.891 103.626 167.745 102.958 166.5C102.847 166.406 102.904 166.111 102.906 165.428C103.777 164.618 104.705 163.513 105.856 162.596C119.503 151.107 121.388 140.701 112.66 122.753C114.119 121.923 115.747 120.892 117.401 120.055C126.799 114.759 133.517 107.213 137.193 96.9411C143.215 80.2475 137.962 61.7913 123.313 47.9477C115.36 40.413 106.225 34.9676 96.1317 31.1157C71.6955 21.8981 47.7363 20.2743 24.3584 28.3873C23.1254 28.722 21.9197 29.2508 20.6866 29.5855C20.4906 29.5922 20.183 29.505 19.26 29.2438C21.2346 25.0788 24.2686 22.1461 27.191 19.1197C29.9174 16.1 32.9514 13.1673 36.0424 9.94002C32.8864 7.80341 30.5891 8.27185 28.4853 9.41667C26.1284 10.8628 23.5483 12.1214 21.7497 14.0364C16.9717 19.2724 12.221 24.7026 7.91699 30.5079C4.62508 35.1079 6.18095 38.4698 11.6914 39.8433C23.4119 42.6641 35.2168 45.3845 47.0216 48.1048C48.9519 48.527 50.8275 48.5607 53.3185 48.7686C52.4647 44.7975 50.0035 44.1007 47.7383 43.3973C39.3473 41.1461 31.2094 38.5937 22.3445 35.7733ZM67.5766 164.874C74.4014 158.788 82.941 158.595 90.1165 164.107C82.887 165.914 76.1612 167.802 67.5766 164.874ZM78.7793 116.393C85.3188 111.78 92.1467 112.719 98.4514 119.041C91.6734 119.857 85.5404 120.359 78.7793 116.393Z"
                                            fill="#2E2E2C"
                                        />
                                    </g>
                                </g>
                                <defs>
                                    <clipPath id="clip0_4760_4171">
                                        <rect
                                            x="102.96"
                                            width="58.08"
                                            height="102.96"
                                            rx="29.04"
                                            transform="rotate(90 102.96 0)"
                                            fill="white"
                                        />
                                    </clipPath>
                                </defs>
                            </svg>
                        </>
                    ) : (
                        <>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="50"
                                height="59"
                                viewBox="0 0 103 59"
                                fill="none"
                            >
                                <g clipPath="url(#clip0_4760_4165)">
                                    <path
                                        d="M22.3445 35.7733C23.1309 35.0635 23.2723 34.6685 23.637 34.4609C51.3541 26.3954 79.2309 28.5688 106.642 43.5391C113.572 47.3035 119.544 52.6615 124.393 59.131C134.899 72.9205 135.649 90.164 126.394 102.772C121.611 109.374 115.768 114.744 107.418 116.98C103.842 114.662 100.351 112.244 96.8306 110.315C91.0744 107.194 85.1149 106.128 79.2004 108.183C74.7719 109.602 72.2415 112.616 72.6784 115.723C73.2519 119.801 76.3782 122.426 80.0427 123.277C85.1338 124.47 90.339 125.073 95.4053 125.389C98.6802 125.57 102.042 124.968 105.235 124.567C116.418 136.87 112.752 152.117 96.7083 160.566C94.5844 159.467 92.3489 158.275 90.1408 157.277C81.8663 153.753 73.7211 153.25 66.3157 157.307C63.4825 158.867 61.0388 161.097 61.6967 165.075C62.2179 168.081 65.3442 170.707 69.82 171.725C76.9258 173.24 83.6765 172.229 90.2337 170.543C92.5037 169.88 94.7738 169.217 96.9322 168.461C114.785 186.879 115.387 214.274 94.5823 223.178C96.1182 224.296 97.262 225.428 98.2693 225.589C99.4726 225.743 100.847 225.013 101.829 224.297C110.785 217.26 116.332 208.388 114.892 196.046C113.889 186.812 110.42 178.246 105.13 170.036C104.378 168.891 103.626 167.745 102.958 166.5C102.847 166.406 102.904 166.111 102.906 165.428C103.777 164.618 104.705 163.513 105.856 162.596C119.503 151.107 121.388 140.701 112.66 122.753C114.119 121.923 115.747 120.892 117.401 120.055C126.799 114.759 133.517 107.213 137.193 96.9411C143.215 80.2475 137.962 61.7913 123.313 47.9477C115.36 40.413 106.225 34.9676 96.1317 31.1157C71.6955 21.8981 47.7363 20.2743 24.3584 28.3873C23.1254 28.722 21.9197 29.2508 20.6866 29.5855C20.4906 29.5922 20.183 29.505 19.26 29.2438C21.2346 25.0788 24.2686 22.1461 27.191 19.1197C29.9174 16.1 32.9514 13.1673 36.0424 9.94002C32.8864 7.80341 30.5891 8.27185 28.4853 9.41667C26.1284 10.8628 23.5483 12.1214 21.7497 14.0364C16.9717 19.2724 12.221 24.7026 7.91699 30.5079C4.62508 35.1079 6.18095 38.4698 11.6914 39.8433C23.4119 42.6641 35.2168 45.3845 47.0216 48.1048C48.9519 48.527 50.8275 48.5607 53.3185 48.7686C52.4647 44.7975 50.0035 44.1007 47.7383 43.3973C39.3473 41.1461 31.2094 38.5937 22.3445 35.7733ZM67.5766 164.874C74.4014 158.788 82.941 158.595 90.1165 164.107C82.887 165.914 76.1612 167.802 67.5766 164.874ZM78.7793 116.393C85.3188 111.78 92.1467 112.719 98.4514 119.041C91.6734 119.857 85.5404 120.359 78.7793 116.393Z"
                                        fill="#2E2E2C"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_4760_4165">
                                        <rect
                                            x="102.96"
                                            width="58.08"
                                            height="102.96"
                                            rx="29.04"
                                            transform="rotate(90 102.96 0)"
                                            fill="white"
                                        />
                                    </clipPath>
                                </defs>
                            </svg>
                        </>
                    )}
                </button>

                <Swiper
                    // effect="cards"
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={false}
                    modules={[Navigation, EffectCards]}
                    navigation={{
                        nextEl: ".swiper-button-next-me",
                        prevEl: ".swiper-button-prev-me",
                    }}
                    onSlideChange={(swiper) => {
                        setCurrentSlide(swiper.slides[swiper.activeIndex].id);

                        setIsBeginning(swiper.isBeginning);
                        setIsEnd(swiper.isEnd);
                    }}
                    className="py-8 w-[70%] select-none"
                >
                    {paintings.map((painting) => (
                        <SwiperSlide
                            className="w-full h-full flex flex-col"
                            id={painting.id}
                            key={painting.id}
                        >
                            <PaintingsSlide painting={painting} />
                        </SwiperSlide>
                    ))}
                </Swiper>

                <button
                    className="swiper-button-next-me disabled:cursor-none disabled:pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 z-10 transition-opacity duration-300 hover:opacity-100 focus:opacity-100 focus:outline-none cursor-pointer"
                    aria-label="Next slide"
                    disabled={isEnd}
                >
                    {isEnd ? (
                        <>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="50"
                                height="59"
                                viewBox="0 0 103 59"
                                fill="none"
                            >
                                <g opacity="0.3">
                                    <g clipPath="url(#clip0_4755_1444)">
                                        <path
                                            d="M80.6152 35.7735C79.8288 35.0638 79.6874 34.6687 79.3227 34.4612C51.6056 26.3956 23.7288 28.569 -3.68261 43.5394C-10.6124 47.3037 -16.5846 52.6617 -21.4331 59.1312C-31.9388 72.9207 -32.6895 90.1643 -23.4339 102.773C-18.6511 109.375 -12.8088 114.744 -4.45788 116.98C-0.882553 114.663 2.60841 112.245 6.12913 110.316C11.8853 107.194 17.8448 106.129 23.7593 108.184C28.1878 109.603 30.7182 112.616 30.2813 115.723C29.7078 119.801 26.5815 122.427 22.917 123.278C17.8259 124.47 12.6207 125.074 7.55444 125.389C4.2795 125.57 0.9178 124.968 -2.27523 124.567C-13.4582 136.87 -9.79252 152.117 6.25145 160.566C8.37528 159.468 10.6108 158.275 12.819 157.277C21.0934 153.754 29.2386 153.25 36.6441 157.307C39.4772 158.867 41.9209 161.097 41.2631 165.075C40.7418 168.082 37.6155 170.707 33.1397 171.725C26.0339 173.24 19.2832 172.23 12.726 170.543C10.456 169.88 8.18591 169.218 6.02749 168.461C-11.8249 186.879 -12.4276 214.274 8.37739 223.178C6.84155 224.297 5.69772 225.428 4.69042 225.589C3.48711 225.743 2.1127 225.014 1.13028 224.297C-7.82557 217.26 -13.3724 208.388 -11.9323 196.047C-10.9292 186.812 -7.46009 178.247 -2.16989 170.036C-1.41805 168.891 -0.666213 167.746 0.00128458 166.5C0.112937 166.406 0.0559168 166.112 0.0534928 165.429C-0.817271 164.618 -1.74508 163.514 -2.89619 162.596C-16.5432 151.107 -18.428 140.701 -9.70074 122.753C-11.1595 121.923 -12.787 120.892 -14.4417 120.055C-23.8393 114.759 -30.5573 107.213 -34.2333 96.9413C-40.2558 80.2478 -35.0019 61.7915 -20.3529 47.9479C-12.4006 40.4133 -3.26509 34.9678 6.82797 31.116C31.2642 21.8983 55.2234 20.2745 78.6013 28.3875C79.8343 28.7222 81.04 29.2511 82.2731 29.5857C82.4691 29.5924 82.7767 29.5053 83.6997 29.244C81.7251 25.079 78.6911 22.1464 75.7687 19.12C73.0423 16.1002 70.0083 13.1676 66.9173 9.94026C70.0733 7.80365 72.3707 8.27209 74.4745 9.41691C76.8313 10.863 79.4114 12.1216 81.21 14.0366C85.988 19.2726 90.7387 24.7028 95.0427 30.5081C98.3346 35.1082 96.7788 38.47 91.2683 39.8435C79.5478 42.6643 67.743 45.3847 55.9381 48.1051C54.0078 48.5272 52.1322 48.5609 49.6412 48.7689C50.495 44.7977 52.9562 44.101 55.2215 43.3975C63.6124 41.1464 71.7504 38.5939 80.6152 35.7735ZM35.3831 164.875C28.5584 158.788 20.0187 158.595 12.8432 164.108C20.0727 165.915 26.7986 167.802 35.3831 164.875ZM24.1804 116.394C17.6409 111.781 10.8131 112.719 4.50829 119.041C11.2863 119.857 17.4193 120.359 24.1804 116.394Z"
                                            fill="#2E2E2C"
                                        />
                                    </g>
                                </g>
                                <defs>
                                    <clipPath id="clip0_4755_1444">
                                        <rect
                                            width="58.08"
                                            height="102.96"
                                            rx="29.04"
                                            transform="matrix(4.37114e-08 1 1 -4.37114e-08 0 0)"
                                            fill="white"
                                        />
                                    </clipPath>
                                </defs>
                            </svg>
                        </>
                    ) : (
                        <>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="50"
                                height="59"
                                viewBox="0 0 103 59"
                                fill="none"
                            >
                                <g clipPath="url(#clip0_4755_1450)">
                                    <path
                                        d="M80.6152 35.7733C79.8288 35.0635 79.6874 34.6685 79.3227 34.4609C51.6056 26.3954 23.7288 28.5688 -3.68261 43.5391C-10.6124 47.3035 -16.5846 52.6615 -21.4331 59.131C-31.9388 72.9205 -32.6895 90.164 -23.4339 102.772C-18.6511 109.374 -12.8088 114.744 -4.45788 116.98C-0.882553 114.662 2.60841 112.244 6.12913 110.315C11.8853 107.194 17.8448 106.128 23.7593 108.183C28.1878 109.602 30.7182 112.616 30.2813 115.723C29.7078 119.801 26.5815 122.426 22.917 123.277C17.8259 124.47 12.6207 125.073 7.55444 125.389C4.2795 125.57 0.9178 124.968 -2.27523 124.567C-13.4582 136.87 -9.79252 152.117 6.25145 160.566C8.37528 159.467 10.6108 158.275 12.819 157.277C21.0934 153.753 29.2386 153.25 36.6441 157.307C39.4772 158.867 41.9209 161.097 41.2631 165.075C40.7418 168.081 37.6155 170.707 33.1397 171.725C26.0339 173.24 19.2832 172.229 12.726 170.543C10.456 169.88 8.18591 169.217 6.02749 168.461C-11.8249 186.879 -12.4276 214.274 8.37739 223.178C6.84155 224.296 5.69772 225.428 4.69042 225.589C3.48711 225.743 2.1127 225.013 1.13028 224.297C-7.82557 217.26 -13.3724 208.388 -11.9323 196.046C-10.9292 186.812 -7.46009 178.246 -2.16989 170.036C-1.41805 168.891 -0.666213 167.745 0.00128458 166.5C0.112937 166.406 0.0559168 166.111 0.0534928 165.428C-0.817271 164.618 -1.74508 163.513 -2.89619 162.596C-16.5432 151.107 -18.428 140.701 -9.70074 122.753C-11.1595 121.923 -12.787 120.892 -14.4417 120.055C-23.8393 114.759 -30.5573 107.213 -34.2333 96.9411C-40.2558 80.2475 -35.0019 61.7913 -20.3529 47.9477C-12.4006 40.413 -3.26509 34.9676 6.82797 31.1157C31.2642 21.8981 55.2234 20.2743 78.6013 28.3873C79.8343 28.722 81.04 29.2508 82.2731 29.5855C82.4691 29.5922 82.7767 29.505 83.6997 29.2438C81.7251 25.0788 78.6911 22.1461 75.7687 19.1197C73.0423 16.1 70.0083 13.1673 66.9173 9.94002C70.0733 7.80341 72.3707 8.27185 74.4745 9.41667C76.8313 10.8628 79.4114 12.1214 81.21 14.0364C85.988 19.2724 90.7387 24.7026 95.0427 30.5079C98.3346 35.1079 96.7788 38.4698 91.2683 39.8433C79.5478 42.6641 67.743 45.3845 55.9381 48.1048C54.0078 48.527 52.1322 48.5607 49.6412 48.7686C50.495 44.7975 52.9562 44.1007 55.2215 43.3973C63.6124 41.1461 71.7504 38.5937 80.6152 35.7733ZM35.3831 164.874C28.5584 158.788 20.0187 158.595 12.8432 164.107C20.0727 165.914 26.7986 167.802 35.3831 164.874ZM24.1804 116.393C17.6409 111.78 10.8131 112.719 4.50829 119.041C11.2863 119.857 17.4193 120.359 24.1804 116.393Z"
                                        fill="#2E2E2C"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_4755_1450">
                                        <rect
                                            width="58.08"
                                            height="102.96"
                                            rx="29.04"
                                            transform="matrix(4.37114e-08 1 1 -4.37114e-08 0 0)"
                                            fill="white"
                                        />
                                    </clipPath>
                                </defs>
                            </svg>
                        </>
                    )}
                </button>
            </div>
            <div className="absolute bottom-[20px] z-[80]">
                <button
                    onClick={handleClick}
                    className="cursor-pointer hover:underline text-[20px] font-normal text-white font-serif px-[48px] py-[20px] rounded-[165px] border border-white/40 bg-[linear-gradient(108deg,_#505050_3.37%,_#1D1D1D_95.93%)] shadow-[0px_5px_10px_0px_rgba(0,0,0,0.30)]"
                >
                    <AnimatePresence mode="wait" initial={false}>
                        <motion.span
                            key={isFullscreen ? "contact" : "buy"}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{
                                duration: 0.3,
                                ease: "easeInOut",
                            }}
                            className="block"
                        >
                            {isFullscreen
                                ? "Show Contact Info"
                                : "Buy for $14.55"}
                        </motion.span>
                    </AnimatePresence>
                </button>
            </div>
        </>
    );
};

export default PaintingsSwiper;

const PaintingsSlide = ({ painting }: { painting: Painting }) => {
    return (
        <div>
            <div className="w-full flex justify-between items-end px-3">
                <h1 className="text-[32px] font-bold italic text-[#1F1E13]">
                    {painting.name}
                </h1>
                <span className="text-[30px] font-normal italic text-[#1F1E13]">
                    {painting.size}
                </span>
            </div>

            <div className="group cursor-pointer relative w-full h-[450px] mx-auto shadow-[0px_3px_12px_rgba(31,30,19,0.4),65px_0px_60px_rgba(0,0,0,0.15),0px_3px_16px_rgba(0,0,0,0.3)]  border border-[rgba(255,255,255,0.15)]">
                <div className="p-8 w-full h-full flex justify-end absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {/* Background blur layer */}
                    <div className="absolute w-full h-full top-0 left-0 mkd transition-all duration-300" />

                    {/* Text content (not blurred) */}
                    <div className="w-[50%] h-full text-[24px] font-normal italic text-white z-40 relative">
                        {painting.text}
                    </div>
                </div>
                <img
                    className="w-full h-full object-cover"
                    src={painting.image}
                    alt="art"
                />
            </div>
            <div className="w-full flex justify-end px-3 bg-transparent">
                <h1 className="text-[24px] font-normal italic text-[#828282]">
                    {painting.paintWay}
                </h1>
            </div>
        </div>
    );
};
