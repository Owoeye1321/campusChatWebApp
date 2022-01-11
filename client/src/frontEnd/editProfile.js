import React, { Component } from 'react'
//import book from './img/shell.jpg'
import styles from './newStyle.module.css'
import Footer from './footer'
import axios from 'axios'
class EditUserProfile extends Component {
  constructor() {
    super()
    this.state = {
      profileDetails: {
        displayName: '',
        fullname: '',
        email: '',
        status: '',
        occupation: '',
      },

      err: null,
      file: null,
      statusCount: 0,
      divRow: 'row',
      segDiv: 'col-sm-12 col-md-6 col-lg-6',
      inputType: 'submit',
      sessName: '',
      colorChanges: 'red',
      inputClass: 'form-control',
      classNameOne: 'container-fluid bg-light rounded ',
      navColor: 'light',
      submitClass: 'btn btn-outline-primary',
      marginInch: '-1px',
    }
  }

  myChangeHandler = (event) => {
    let nam = event.target.name
    let value = event.target.value
    let statusCopy = Object.assign({}, this.state)
    statusCopy.profileDetails[nam] = value
    this.setState(statusCopy)
  }
  fileChangeHandler = (event) => {
    let name = event.target.files[0]
    this.setState({ file: name }, () => {
      console.log(this.state.file)
    })
  }

  handleSubmit = async (event) => {
    event.preventDefault()
    const apiUrl = '/api/editprofile'
    //  const profiledata = JSON.stringify(this.state.profileDetails)
    const profileData = new FormData()
    profileData.append('data', this.state.profileDetails)
    profileData.append('file', this.state.file)
    console.log(profileData)
    //    axios.post(apiUrl,profileData)
    //     .then((res)=>{console.log(res.statusText)
    //         this.setState({err:res.data},()=>{
    //             console.log(this.state.err)
    //         })})
    //     .catch((err)=>console.log('An error has occured'+err))
    try {
      let response = await fetch(apiUrl, {
        method: 'post',
        body: profileData,
      })

      if (!response.ok) {
        const message = await response.text()
        throw new Error(message)
      }

      const json = await response.json()
      console.log('Response', json)
    } catch (error) {
      alert('upload failed')
      console.log('Error uploading file failed', error)
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className={this.state.classNameOne} id={styles.profileDiv}>
          <strong id={styles.campusText}>Campus chat</strong>
          <h4>Welcome {this.state.sessName}</h4>
          <center>
            <div>
              <strong style={{ marginTop: '20px', fontSize: '20px' }}>
                Create Profile
              </strong>
            </div>
          </center>

          <form onSubmit={this.handleSubmit} multiple="multiple">
            <div className={this.state.divRow}>
              <div className={this.state.segDiv} id={styles.segDiv}>
                <div id={styles.designDiv}>
                  <div
                    className="my-3"
                    style={{
                      width: '150px',
                      height: '150px',
                      borderRadius: '50%',
                    }}
                  >
                    <center>
                      <label style={{ width: '100%' }}>
                        <img
                          id={styles.imgStyle}
                          rel="icon"
                          alt=""
                          src="/img/user.png"
                        />
                        <input
                          onChange={this.fileChangeHandler}
                          required
                          type="file"
                          name="file"
                        />
                      </label>
                    </center>
                  </div>

                  <input
                    onChange={this.myChangeHandler}
                    required
                    className={this.state.inputClass}
                    id={styles.inputStyles}
                    type="text"
                    name="displayName"
                    placeholder="Display Name"
                  />
                  <input
                    onChange={this.myChangeHandler}
                    required
                    className={this.state.inputClass}
                    id={styles.inputStyles}
                    type="text"
                    name="fullname"
                    placeholder="Fullname"
                  />
                  <input
                    onChange={this.myChangeHandler}
                    required
                    className={this.state.inputClass}
                    id={styles.inputStyles}
                    type="text"
                    name="email"
                    placeholder="Email"
                  />
                  <div id={styles.err}>
                    <i style={{ color: this.state.colorChanges }}>
                      {this.state.err}
                    </i>
                  </div>
                </div>
              </div>
              <div required className={this.state.segDiv} id={styles.segDiv}>
                <div id={styles.designDiv}>
                  <textarea
                    onChange={this.myChangeHandler}
                    required
                    className={this.state.inputClass}
                    style={{
                      borderRadius: '10px',
                      height: '150px',
                      width: '100%',
                    }}
                    name="status"
                    placeholder="Status"
                  />
                  <span>{this.state.statusCount}/100</span>
                  <input
                    onChange={this.myChangeHandler}
                    required
                    className={this.state.inputClass}
                    id={styles.inputStyles}
                    type="text"
                    name="occupation"
                    placeholder="Occupation"
                  />
                  <div id={styles.err}>
                    <i style={{ color: this.state.colorChanges }}>
                      {this.state.err}
                    </i>
                  </div>
                  <input
                    style={{ marginBottom: this.state.marginInch }}
                    className={this.state.submitClass}
                    type={this.state.inputType}
                    value="Submit"
                    id={styles.inputStyles}
                  />
                  <br></br>
                </div>
              </div>
            </div>
          </form>
          <Footer navColor={this.state.navColor} />
        </div>
      </React.Fragment>
    )
  }
}

export default EditUserProfile
