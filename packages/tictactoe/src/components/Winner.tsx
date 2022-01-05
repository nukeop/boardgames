import { GameOver } from "./types";
import styles from "./Winner.module.scss";

export type WinnerProps = {
    gameover?: GameOver;
}

export const Winner: React.FC<WinnerProps> = ({ gameover }) => {
    return <div className={styles['winner']}>
        {
            gameover?.winner && <div>
                <h1>{gameover.winner} wins!</h1>
            </div>
        }
        {
            gameover?.draw && <div>
                <h1>Draw!</h1>
            </div>
        }
    </div>
}