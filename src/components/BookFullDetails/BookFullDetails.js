import styles from './BookFullDetails.module.css'

function BookFullDetails({ id, img, title, description }) {
  return (
    <div className={styles.bookDetails}>
      <img src={img} className="card-img-top" alt="..." />
      <div>
        <h5>{title}</h5>
        <p>{description}</p>
      </div>
    </div>
  );
}
export default BookFullDetails;
