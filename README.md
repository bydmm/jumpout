jQuery Jumpout
=======

Usage
=======
``` erb
<!-- /apps/app/blogs/index.html.erb -->
<%= link_to "New", new_blog_path , remote: true %>
```
``` erb
<!--  /apps/app/blogs/_form.html.erb -->
<%= simple_form_for (@blog), html: {id: "js-jumpout-form"} do |f| %>
  <%= f.input :title %>
  <%= f.input :content %>
  <%= f.submit %>
<% end %>
```
``` javascript
//  /apps/app/blogs/new.js.erb
$("body").append("<%= j render("form") %>");
$("#js-jumpout-form").jumpout(function(){
  // When click this form, this form wiil close
  // Forgive me i know it's so bullshit! But i want show it have a callback;
  $("#js-jumpout-form").click(function(event) {
    $("#js-jumpout-form").closeJumpout();
  });
});
```

If you use scss & compass please input jumpout.css.scss.

If you use css jumpout.css may fix for you
