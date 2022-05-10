export const variable = {
    color: {
        purple: "#b8b7d0",
        blue: "#20ade4",
        primary: "#060070",
        secondary: "#e71882",
    },
    container: {
        maxWidth: "100%",
        width: "1170px",
    },
    breakpoint: {
        xxsMin: "400px",
        xsMin: "768px",
        smMin: "992px",
        mdMin: "1200px",
        lgMin: "1600px",
    }

};
const VariableStyle = () => {
    return (
        <>
            <style jsx global>{`
                html,
                body {
                    --pdContainer: 86px;

                    --fzr36: 36px;
                    --lhr36: 46px;

                    --fzr30: 30px;
                    --lhr30: 40px;

                    --fzr21: 21px;

                    --fzr18: 18px;
                    --lhr18: 26px;

                    --fzr16: 16px;
                    --lhr16: 26px;

                    --frz12: 12px;
                    @media (max-width: 1310px) {
                        --fzr16: 15px;
                    }
                    @media (max-width: 1220px) {
                        font-size: 13px;
                        --fzr16: 14px;
                        --pdContainer: 60px;
                    }
                    @media (max-width: 1024px) {
                        --fzr16: 13px;
                        --pdContainer: 55px;
                    }
                }
            `}</style>
        </>
    );
}

export default VariableStyle;