import React from 'react'
import axios from 'axios'
import Button from './Button.js'
import AddChapterPopup from './AddChapterPopup.js'

class CourseBox extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            token: localStorage.getItem('savedToken'),
            course: this.props.course,
            videos: this.props.course.videos,
            newVideo: '',
            addChapterPopup: false,
            id: 0,
            videosCount: this.props.course.videos.length,
        }
        this.upadateCourse = this.upadateCourse.bind(this)
        this.addChapterPopup = this.addChapterPopup.bind(this)
        this.onChange = this.onChange.bind(this)
    }
    
    upadateCourse(){
        const authToken = ('Bearer ').concat(this.state.token)
        var videos = this.state.course.videos
        videos = videos.concat({id: this.state.videosCount++, video: this.state.newVideo})
        axios.post(`${process.env.REACT_APP_HOST}/course/${this.state.course._id}`,{videos: videos}, {headers: {"Authorization" : authToken}})
        .then((res) => {
            this.setState({videos: videos,videosCount: videos.length})
            this.addChapterPopup()
        })
        .catch ((e) => {
            console.log(e)
            this.addChapterPopup()
        })
    }
    onChange(e) {
        e.preventDefault()
        this.setState({newVideo: e.target.value})
    }
    addChapterPopup(){
        const addChapterPopup = !(this.state.addChapterPopup)
        this.setState({addChapterPopup: addChapterPopup})
    }

    render() {
        
        return (
            <div className="course_box" >
                <div className = "course_box_header" >
                    <h1>{this.state.course.name}</h1>
                    {
                        this.state.course && 
                        <Button className = "Button" text = "Add New Chapter" onClick = {this.addChapterPopup} />
                    }
                </div>

                {
                    this.state.addChapterPopup &&
                    <AddChapterPopup onClick = {this.upadateCourse} cancelClick = {this.addChapterPopup} onChange = {this.onChange}  />
                }
                
                <div className = "video_player" >
                    {
                        this.state.videosCount &&
                        <div className = "video_wrapper">
                            <iframe src={this.state.videos[this.state.id].video} title="YouTube video player" 
                                frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                            </iframe>
                        </div>
                    }
                    {
                        !this.state.videosCount && 
                        <div>
                            <img src = {this.state.course.coursePic} />
                            <h2>This Course Has Zero Chapters. Sorry !!!</h2>
                        </div>
                    }
                    
                </div>
                
                {
                    this.state.videosCount &&
                    <div className = "buttons_div" >
                        <Button className = "Button_red" text = "Prev" />
                        <Button className = "Button" text = "Next" />
                    </div>
                }
                
            </div>
        )
    }
}

export default CourseBox
