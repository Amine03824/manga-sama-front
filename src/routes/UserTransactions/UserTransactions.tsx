import React from 'react';
import { Link } from 'react-router-dom';
import MobileNav from '../../components/MobileNav/MobileNav';
import Page from '../../components/Page/Page';
import Footer from '../../components/Footer/Footer';
import './UserTransactions.scss';

function UserTransactions() {
  return (
    <Page>
      <div className="user-transactions">
        <div className="user-transactions__top_container">
          <h2 className="user-transactions__top_title">
            Mon historique de transaction(s)
          </h2>
        </div>
        <div className="user-transactions__main_container">
          <ul className="user-transactions__cards">
            <li className="user-transactions__cards_item">
              <img
                className="user-transactions__cards_item-img"
                src="\assets\icons\naruto01.jpg"
              ></img>
              <div className="user-transactions__cards_item-content">
                <h4 className="user-transactions__cards_item-content-title">
                  Nom du manga
                </h4>
                <p className="user-transactions__cards_item-content-price">
                  10 €
                </p>
              </div>
              <p className="user-transactions__cards_item-state">Vendu</p>
            </li>
            <li className="user-transactions__cards_item">
              <img
                className="user-transactions__cards_item-img"
                src="\assets\icons\naruto01.jpg"
              ></img>
              <div className="user-transactions__cards_item-content">
                <h4 className="user-transactions__cards_item-content-title">
                  Nom du manga
                </h4>
                <p className="user-transactions__cards_item-content-price">
                  10 €
                </p>
              </div>
              <p className="user-transactions__cards_item-state">Vendu</p>
            </li>
            <li className="user-transactions__cards_item">
              <img
                className="user-transactions__cards_item-img"
                src="\assets\icons\naruto01.jpg"
              ></img>
              <div className="user-transactions__cards_item-content">
                <h4 className="user-transactions__cards_item-content-title">
                  Nom du manga
                </h4>
                <p className="user-transactions__cards_item-content-price">
                  10 €
                </p>
              </div>
              <p className="user-transactions__cards_item-state">Vendu</p>
            </li>
          </ul>
        </div>
      </div>
    </Page>
  );
}

export default UserTransactions;
