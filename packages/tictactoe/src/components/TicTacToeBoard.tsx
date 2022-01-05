import React, { useCallback } from 'react';
import { BoardProps } from 'boardgame.io/react';
import { TicTacToeState } from '../Game';

import styles from './TicTacToeBoard.module.scss';
import { Winner } from './Winner';

export type TicTacToeBoardProps = BoardProps<TicTacToeState>;

export const TicTacToeBoard: React.FC<TicTacToeBoardProps> = ({
    moves,
    G,
    ctx
}) => {
    const clickCell = useCallback((id: number) => {
        moves.clickCell(id);
    }, [moves]);

    return <div className={styles['board-container']}>
        <div className={styles['board']}>
            {
                G.cells.map((cell, id) => (
                    <button
                        key={id}
                        className={styles['cell']}
                        onClick={() => clickCell(id)}
                    >
                        {cell === "0" && "X"}
                        {cell === "1" && "O"}
                    </button>
                ))
            }
        </div>
        <Winner
            gameover={ctx.gameover}
        />
    </div>
}