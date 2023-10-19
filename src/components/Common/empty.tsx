import React from 'react';
import styles from '../../assets/styles/components/common/empty.module.scss'


const EmptyComponent: React.FC = () => {
    return (
        <div className="flex-center flex-direction-column">
            <img className={styles["imgWidth25"]} src="https://cdn-icons-png.flaticon.com/512/6598/6598519.png" alt="" />
            <p>Brak zadań ! Dodaj Nowe.</p>
        </div>

    );
};

export default EmptyComponent;