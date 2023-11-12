'use client'
import './loading.css'
const LoadingCard = () => {
    return (
        <div className="card">
            <div className="card_content">
                <div className="card_loader__img card_loader__anim"></div>
                <div className="card_loader__text card_loader__anim"></div>
                <div className="card_loader__title card_loader__anim"></div>
                <div className="card_loader__subtitle card_loader__anim"></div>
            </div>
        </div>
    );
};

export default LoadingCard;