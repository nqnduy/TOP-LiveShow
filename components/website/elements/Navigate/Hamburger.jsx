import React from "react";

export default function Hamburger({ open, ...e }) {
    console.log("open:", open);
    return (
        <>
            <div className={`menu ${open ? "active" : "back"} `} {...e}>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>

            <style jsx>{`
                $t: 0.2s;
                $delay: 0.05s;
                $background: #fff;
                .menu {
                    display: none;
                    position: absolute;
                    overflow: hidden;
                    padding: 10px;
                    top: 20px;
                    right: 20px;
                    z-index: 110;
                    cursor: pointer;
                    &.active {
                        &:before {
                            animation: slideLeft $t $delay ease-out forwards;
                        }
                        &:after {
                            animation: slideRight $t $delay ease-out forwards;
                        }
                        .bar {
                            animation: rotate45 $t ease-out forwards;
                            &:last-child {
                                animation: rotate135 $t $t ease-out forwards;
                            }
                        }
                    }
                    &.back {
                        &:before {
                            transform: translateX(-120%);
                            animation: slideBack $t $delay ease-out forwards;
                        }
                        &:after {
                            transform: translateX(120%);
                            animation: slideBack $t $delay ease-out forwards;
                        }
                        .bar {
                            transform: rotate(-45deg);
                            animation: rotateBack $t ease-out forwards;
                            &:last-child {
                                transform: rotate(-135deg);
                                animation: rotateBack $t $t ease-out forwards;
                            }
                        }
                    }
                    &:before {
                        content: "";
                        display: block;
                        width: 50px;
                        height: 5px;
                        background: $background;
                    }
                    &:after {
                        content: "";
                        display: block;
                        width: 50px;
                        height: 5px;
                        background: $background;
                    }
                    .bar {
                        display: block;
                        width: 50px;
                        height: 5px;
                        background: $background;
                        margin: 10px 0;
                        &:last-child {
                            opacity: 0;
                            transform: rotate(-45deg);
                            position: absolute;
                            top: 15px;
                        }
                    }
                }
                @media (max-width: 1024px) {
                    .menu {
                        display: block;
                    }
                }
                @keyframes rotate135 {
                    form {
                        opacity: 1;
                        transform: rotate(-45deg);
                    }
                    to {
                        opacity: 1;
                        transform: rotate(-135deg);
                    }
                }

                @keyframes rotate45 {
                    to {
                        transform: rotate(-45deg);
                    }
                }
                @keyframes rotateBack {
                    to {
                        transform: rotate(0);
                    }
                }
                @keyframes slideRight {
                    to {
                        transform: translateX(122%);
                    }
                }
                @keyframes slideLeft {
                    to {
                        transform: translateX(-122%);
                    }
                }
                @keyframes slideBack {
                    to {
                        transform: translateX(0);
                    }
                }
            `}</style>
        </>
    );
}
