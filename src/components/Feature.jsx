import usuario from '../assets/img/usuario.png'
import bank from '../assets/img/bank.png'
import lock from '../assets/img/lock.png'

export default function Feature() {
  return (
    <section class="feature">
    <div class="feature-box">
        <img src={usuario} alt="" />
        <h2 class="feature-box-h2">About us</h2>
        <p class="feature-box-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. A rerum ullam obcaecati doloremque quos quas, natus eius at sed, fugiat blanditiis minima, quasi consequuntur magnam in atque tempora qui nostrum.</p>
    </div>
    <div class="feature-box">
        <img src={bank} alt="" />
        <h2 class="feature-box-h2">About us</h2>
        <p class="feature-box-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. A rerum ullam obcaecati doloremque quos quas, natus eius at sed, fugiat blanditiis minima, quasi consequuntur magnam in atque tempora qui nostrum.</p>
    </div>
    <div class="feature-box">
        <img src={lock} alt="" />
        <h2 class="feature-box-h2">About us</h2>
        <p class="feature-box-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. A rerum ullam obcaecati doloremque quos quas, natus eius at sed, fugiat blanditiis minima, quasi consequuntur magnam in atque tempora qui nostrum. </p>
    </div>
</section>
  )
}
