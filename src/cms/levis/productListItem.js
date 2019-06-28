import ReviewCount from './components/ReviewCount'

export default {
  className: 'product-list-item-custom',
  children: [
    'image',
    <ReviewCount />,
    'name',
    'price',
  ]
}