//alert page triggers
'use strict'
$(".swtalrt").on("click", function () {
    var a = $(this).attr("data-type");
    swal({
        title: "Are you sure?",
        text: "You will not be able to recover this imaginary file!",
        type: a,
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel plx!",
        closeOnConfirm: false,
        closeOnCancel: false
    }, function (a) {
        if (a) swal("Deleted!", "Your imaginary file has been deleted.", "success"); else swal("Cancelled", "Your imaginary file is safe :)", "error");
    });
});

$(".swtalrt1").on("click", function () {
    swal("I Love Semantic!");
});
$(".swtalrt2").on("click", function () {
    swal(
   'The Internet?',
   'That thing is still around?',
   'question'
 )
});
$(".swtalrt3").on("click", function () {
    swal(
  'Good job!',
  'You clicked the button!',
  'success'
)
});
$(".swtalrt4").on("click", function () {
    swal({
        title: 'Auto close alert!',
        text: 'I will close in 2 seconds.',
        timer: 2000
    }).then(
   function () { },
   // handling the promise rejection
   function (dismiss) {
       if (dismiss === 'timer') {
           console.log('I was closed by the timer')
       }
   }
 )
});
$(".swtalrt5").on("click", function () {
    swal({ title: "Sweet!", text: "Here's a custom image.", imageUrl: "img/avatar/animals/panda_128px.png" });
});
$(".swtalrt6").on("click", function () {
    swal({
        title: '<i>HTML</i> <u>example</u>',
        type: 'info',
        html:
          'You can use <b>bold text</b>, ' +
          '<a href="//github.com">links</a> ' +
          'and other HTML tags',
        showCloseButton: true,
        showCancelButton: true,
        confirmButtonText:
          '<i class="ion-happy-outline"></i> Great!',
        cancelButtonText:
          '<i class="ion-sad-outline"></i>'
    })
});
$(".swtalrt7").on("click", function () {
    swal({ title: "Auto close alert!", text: "I will close in 2 seconds.", timer: 2000, showConfirmButton: false });
});
$(".swtalrt8").on("click", function () {
    swal.setDefaults({
        input: 'text',
        confirmButtonText: 'Next &rarr;',
        showCancelButton: true,
        animation: false,
        progressSteps: ['1', '2', '3']
    })

    var steps = [
      {
          title: 'Question 1',
          text: 'Chaining swal2 modals is easy'
      },
      'Question 2',
      'Question 3'
    ]

    swal.queue(steps).then(function (result) {
        swal.resetDefaults()
        swal({
            title: 'All done!',
            html:
              'Your answers: <pre>' +
                JSON.stringify(result) +
              '</pre>',
            confirmButtonText: 'Lovely!',
            showCancelButton: false
        })
    }, function () {
        swal.resetDefaults()
    })
});
$(".swtalrt9").on("click", function () {
    swal({
        title: 'Submit email to run ajax request',
        input: 'email',
        showCancelButton: true,
        confirmButtonText: 'Submit',
        showLoaderOnConfirm: true,
        preConfirm: function (email) {
            return new Promise(function (resolve, reject) {
                setTimeout(function () {
                    if (email === 'taken@example.com') {
                        reject('This email is already taken.')
                    } else {
                        resolve()
                    }
                }, 2000)
            })
        },
        allowOutsideClick: false
    }).then(function (email) {
        swal({
            type: 'success',
            title: 'Ajax request finished!',
            html: 'Submitted email: ' + email
        })
    })
});

$(".swtalrt10").on("click", function () {
    swal({
        title: 'jQuery HTML example',
        html: $('<div>')
          .addClass('some-class')
          .text('jQuery is everywhere.'),
        animation: false,
        customClass: 'animated tada'
    });

    $('.swal2-modal')
  .transition('tada')
    ;
})

$(".swtalrt11").on("click", function () {
    swal({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then(function () {
        swal(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
    })
})

$(".swtalrt12").on("click", function () {
    swal({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, cancel!',
        confirmButtonClass: 'ui button positive',
        cancelButtonClass: 'ui button negative',
        buttonsStyling: false
    }).then(function () {
        swal(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
    }, function (dismiss) {
        // dismiss can be 'cancel', 'overlay',
        // 'close', and 'timer'
        if (dismiss === 'cancel') {
            swal(
              'Cancelled',
              'Your imaginary file is safe :)',
              'error'
            )
        }
    })
})

$(".swtalrt13").on("click", function () {
    swal({
        title: 'Custom width, padding, background.',
        width: 600,
        padding: 100,
        background: '#fff url(//bit.ly/1Nqn9HU)'
    })
})
$(".swtalrt14").on("click", function () {
    swal.queue([{
        title: 'Your public IP',
        confirmButtonText: 'Show my public IP',
        text:
          'Your public IP will be received ' +
          'via AJAX request',
        showLoaderOnConfirm: true,
        preConfirm: function () {
            return new Promise(function (resolve) {
                $.get('https://api.ipify.org?format=json')
                  .done(function (data) {
                      swal.insertQueueStep(data.ip)
                      resolve()
                  })
            })
        }
    }])
})