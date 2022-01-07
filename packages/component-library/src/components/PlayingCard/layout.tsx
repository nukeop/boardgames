import React from "react";
import cx from "classnames";

import { CardSuit } from "..";
import { CardRank } from "../types";
import { LargePip } from "./PlayingCard";
import styles from "./PlayingCard.module.scss";

type PipsColumnProps = {
    centered?: boolean;
    largeGap?: boolean;
}
export const PipsColumn: React.FC<PipsColumnProps> = ({
    children,
    centered,
    largeGap
}) => <div className={cx(
    styles['pips-column'],
    { 
        [styles['centered']]: centered,
        [styles['large-gap']]: largeGap
    }
)}>{children}</div>;

export const getPipsLayout = (rank: CardRank, suit: CardSuit) => {
    switch (rank) {
        case "2":
            return <PipsColumn>
                <LargePip suit={suit} />
                <LargePip suit={suit} />
            </PipsColumn>;
        case "3":
            return <PipsColumn>
                <LargePip suit={suit} />
                <LargePip suit={suit} />
                <LargePip suit={suit} />
            </PipsColumn>;
        case "4":
            return <>
                <PipsColumn>
                    <LargePip suit={suit} />
                    <LargePip suit={suit} />
                </PipsColumn>
                <PipsColumn>
                    <LargePip suit={suit} />
                    <LargePip suit={suit} />
                </PipsColumn>
            </>;
        case "5":
            return <>
                <PipsColumn>
                    <LargePip suit={suit} />
                    <LargePip suit={suit} />
                </PipsColumn>
                <PipsColumn centered>
                    <LargePip suit={suit} />
                </PipsColumn>
                <PipsColumn>
                    <LargePip suit={suit} />
                    <LargePip suit={suit} />
                </PipsColumn>
            </>;
        case "6":
            return <>
                <PipsColumn>
                    <LargePip suit={suit} />
                    <LargePip suit={suit} />
                    <LargePip suit={suit} />
                </PipsColumn>
                <PipsColumn>
                    <LargePip suit={suit} />
                    <LargePip suit={suit} />
                    <LargePip suit={suit} />
                </PipsColumn>
            </>;
        case "7":
            return <>
                <PipsColumn>
                    <LargePip suit={suit} />
                    <LargePip suit={suit} />
                    <LargePip suit={suit} />
                </PipsColumn>
                <PipsColumn centered>
                    <LargePip suit={suit} />
                </PipsColumn>
                <PipsColumn>
                    <LargePip suit={suit} />
                    <LargePip suit={suit} />
                    <LargePip suit={suit} />
                </PipsColumn>
            </>;
        case "8":
            return <>
                <PipsColumn>
                    <LargePip suit={suit} />
                    <LargePip suit={suit} />
                    <LargePip suit={suit} />
                </PipsColumn>
                <PipsColumn centered>
                    <LargePip suit={suit} />
                    <LargePip suit={suit} />
                </PipsColumn>
                <PipsColumn>
                    <LargePip suit={suit} />
                    <LargePip suit={suit} />
                    <LargePip suit={suit} />
                </PipsColumn>
            </>;
        case "9":
            return <>
                <PipsColumn>
                    <LargePip suit={suit} />
                    <LargePip suit={suit} />
                    <LargePip suit={suit} />
                    <LargePip suit={suit} />
                </PipsColumn>
                <PipsColumn centered>
                    <LargePip suit={suit} />
                </PipsColumn>
                <PipsColumn>
                    <LargePip suit={suit} />
                    <LargePip suit={suit} />
                    <LargePip suit={suit} />
                    <LargePip suit={suit} />
                </PipsColumn>
            </>;
        case "10":
            return <>

                <PipsColumn>
                    <LargePip suit={suit} />
                    <LargePip suit={suit} />
                    <LargePip suit={suit} />
                    <LargePip suit={suit} />
                </PipsColumn>
                <PipsColumn centered largeGap>
                    <LargePip suit={suit} />
                    <LargePip suit={suit} />
                </PipsColumn>
                <PipsColumn>
                    <LargePip suit={suit} />
                    <LargePip suit={suit} />
                    <LargePip suit={suit} />
                    <LargePip suit={suit} />
                </PipsColumn>
            </>;
    }
}