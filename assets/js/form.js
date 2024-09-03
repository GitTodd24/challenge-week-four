//create form object 'name: blogForm'
const blogForm= {
    userName:`userName`,
    blogTitle: `blogTitle`,
    comments: `comments`,
const formInfo= userName + blogTitle + comments,
    newForm: function () {
        return this.formInfo;
    }
};

//conditinal statement checks to see if browser supports local storage api
if (window.localStorage) {
//Variables created to retrive and store form inputs
const txtUsername=document.getElementById(`userName`);
const txtBlogtitle=document.getElementById(`blogTitle`);
const txtComments=document.getElementById(`comments`);


//Form inputs saved into storage object as JSON formatted data
localStorage.userName=txtUsername;
localStorage.blogTitle=txtBlogtitle;
localStorage.comments=txtComments;

//third, event listener added to form labels to save data to local storage object each time an input event fires

txtUsername.addEventListener(`input`, function () {
    localStorage.setItem(`userName`, txtUsername.value);
}, false);

txtBlogtitle.addEventListener(`input`, function () {
    localStorage.setItem(`blogTitle`, txtBlogtitle.value);
}, false);

txtComments.addEventListener(`input`, function () {
    localStorage.setItem(`comments`, txtComments.value);
}, false);

//fourth, access information from storage object 
const userName=localStorage.userName;
const blogTtitle=localStorage.blogTitle;
const comments=localStorage.comments;

const items=localStorage.length; 
}
 
blogForm.formInfo; 

    