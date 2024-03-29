import React from "react"
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Product = ({ id, title, category, price, description }) => {
  return (
    <motion.div
      key={id}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5 }}
      transition={{ ease: 'easeInOut', duration: 0.8 }}
      className="input"
    >
      <h2>{title}</h2>
      <br />
      <br />
      <h3>{category}</h3>
      <h4>{price} €</h4>
      <p>{description}</p>
      <div className="buttons">
        <Link to={`/reviews/${id}`}>Show Reviews</Link>
      </div>
    </motion.div>
  )
}

export default Product
