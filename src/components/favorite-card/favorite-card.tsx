import styles from './favorite-card.module.scss';
import classNames from 'classnames';
import trashcan from '../../img/trash.png';
import { useContext } from 'react';
import { FavoriteContext } from '../../context/favoriteContext';
export interface FavoriteCardProps {
    className?: string;
    movie: {
        id: number;
        poster_path?: string;
        title: string;
        overview: string;
        vote_average: number;
        release_date: string;
    };
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-favorite-cards-and-templates
 */
export const FavoriteCard = ({ className, movie }: FavoriteCardProps) => {
    const { dispatch } = useContext(FavoriteContext);
    return (
        <div className={classNames(styles.root, className, movie)}>
            <img
                src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt="movieImg"
                className={styles.fImg}
            />
            <div className={styles.detail}>
                <h1 className={styles.title}>{movie.title}</h1>
                <span>{movie.vote_average}</span>
            </div>
            <div className={styles.delete}>
                <img
                    className={styles.trashImg}
                    src={trashcan}
                    alt="trashImg"
                    onClick={() => dispatch({ type: 'REMOVE_MOVIE', payload: movie })}
                />
            </div>
        </div>
    );
};
