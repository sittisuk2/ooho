var canvas  = $("#canvas"),
        context = canvas.get(0).getContext("2d"),
        $result = $('#result');
        $picture = $('#picture');
        $img = $('#img');
        $imgModal = $('#imgModal')
        var croppedImageDataURL = null


    
    $('#fileInput').on( 'change', function(){
      $(".modal").addClass("is-active");
        if (this.files && this.files[0]) {
          if ( this.files[0].type.match(/^image\//) ) {
            var reader = new FileReader();
            reader.onload = function(evt) {
               var img = new Image()
               img.onload = function() {
                context.canvas.height = img.height;
                context.canvas.width  = img.width;
                context.drawImage(img, 0, 0);
                canvas.cropper({
                //  aspectRatio: 1 / 1
                aspectRatio: 16 / 9,
                viewMode: 1,
                responsive: true,
                });
                $('#btnCrop').click(function() {
                  croppedImageDataURL = canvas.cropper('getCroppedCanvas').toDataURL("image/png");
                  $picture.html( $('<img>').attr('src', croppedImageDataURL).attr('style', 'height: 573px;display: block;margin-left: auto;margin-right: auto;') );                    
                  $img.html(`<img style="margin: 0 auto;position: relative;overflow: hidden;width: 100%;border-radius: 10px;" src="../../images/blog/register.png" />`)
                  $('.bg-image').remove()
                  $(".modal").removeClass("is-active");
                });
                $('#btnRestore').click(function() {
                  canvas.cropper('reset');
                  $picture.empty();
                });
               };

               img.src = evt.target.result
               img.id = 'mmii'
               if (evt.target.result) {
                 document.querySelector('.addHeader').style.display = 'none'
               }
              //  $imgModal.attr('src', evt.target.result).css('width', 200)
              if (document.querySelector('#mmii')) {
                 $('#mmii').attr('src', '')
              }

               console.log('zz', img.src)
            }
            reader.readAsDataURL(this.files[0]);
          }
          else {
            alert("Invalid file type! Please select an image file.");
          }
        }
        else {
          alert('No file(s) selected.');
          canvas.cropper('reset');          
          $picture.html(`<img style="width: 100%;" src="${croppedImageDataURL}" />`)
          $(".modal").removeClass("is-active");
        }
    });
    
    $(".modal-close").click(function() {
       $(".modal").removeClass("is-active");
    });