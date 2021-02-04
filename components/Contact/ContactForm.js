import React, {useState} from 'react'
import axios from 'axios'

const initialState = {
  name: '',
  email: '',
  phone_number: '',
  msg_subject: '',
  message: '',
}

const ContactForm = () => {
  const [form, setForm] = useState(initialState)

  const handleChanges = (event) => {
    event.persist()
    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const data = await axios.post('/api/contact', form)
  }

  return (
    <div className='contact-form'>
      <h2>Get In Touch</h2>
      <form id='contactForm' onSubmit={handleSubmit}>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6'>
              <div className='form-group'>
                <input
                  type='text'
                  name='name'
                  id='name'
                  className='form-control'
                  placeholder='Your Name'
                  value={form.name}
                  required
                  onChange={handleChanges}
                />
              </div>
            </div>

            <div className='col-lg-6'>
              <div className='form-group'>
                <input
                  type='email'
                  name='email'
                  id='email'
                  className='form-control'
                  placeholder='Your Email'
                  required
                  value={form.email}
                  required
                  onChange={handleChanges}
                />
              </div>
            </div>

            <div className='col-lg-6'>
              <div className='form-group'>
                <input
                  type='text'
                  name='phone_number'
                  id='phone_number'
                  className='form-control'
                  placeholder='Phone'
                  required
                  value={form.phone_number}
                  required
                  onChange={handleChanges}
                />
              </div>
            </div>

            <div className='col-lg-6'>
              <div className='form-group'>
                <input
                  type='text'
                  name='msg_subject'
                  id='msg_subject'
                  className='form-control'
                  placeholder='Subject'
                  required
                  value={form.msg_subject}
                  required
                  onChange={handleChanges}
                />
              </div>
            </div>

            <div className='col-lg-12 col-md-12'>
              <div className='form-group'>
                <textarea
                  name='message'
                  className='form-control'
                  id='message'
                  rows='8'
                  placeholder='Your Message'
                  value={form.message}
                  required
                  onChange={handleChanges}
                  required
                ></textarea>
              </div>
            </div>

            <div className='col-lg-12 col-md-12'>
              <button type='submit' className='btn btn-primary'>
                Send Message
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default ContactForm

// import React, {useState} from 'react'

// const ContactForm = () => {
//   return (
//     <div className='contact-form'>
//       <h2>Get In Touch</h2>

//       <form id='contactForm'>
//         <div className='container'>
//           <div className='row'>
//             <div className='col-lg-6'>
//               <div className='form-group'>
//                 <input
//                   type='text'
//                   name='name'
//                   id='name'
//                   className='form-control'
//                   placeholder='Your Name'
//                   required
//                 />
//               </div>
//             </div>

//             <div className='col-lg-6'>
//               <div className='form-group'>
//                 <input
//                   type='email'
//                   name='email'
//                   id='email'
//                   className='form-control'
//                   placeholder='Your Email'
//                   required
//                 />
//               </div>
//             </div>

//             <div className='col-lg-6'>
//               <div className='form-group'>
//                 <input
//                   type='text'
//                   name='phone_number'
//                   id='phone_number'
//                   className='form-control'
//                   placeholder='Phone'
//                   required
//                 />
//               </div>
//             </div>

//             <div className='col-lg-6'>
//               <div className='form-group'>
//                 <input
//                   type='text'
//                   name='msg_subject'
//                   id='msg_subject'
//                   className='form-control'
//                   placeholder='Subject'
//                   required
//                 />
//               </div>
//             </div>

//             <div className='col-lg-12 col-md-12'>
//               <div className='form-group'>
//                 <textarea
//                   name='message'
//                   className='form-control'
//                   id='message'
//                   rows='8'
//                   placeholder='Your Message'
//                   required
//                 ></textarea>
//               </div>
//             </div>

//             <div className='col-lg-12 col-md-12'>
//               <button type='submit' className='btn btn-primary'>
//                 Send Message
//               </button>
//             </div>
//           </div>
//         </div>
//       </form>
//     </div>
//   )
// }

// export default ContactForm
