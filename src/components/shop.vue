<template>
    <div class="card container-fluid">
        <!----gx 跟gy為水平跟垂直距離-後面數字的是調整距離------------->
        <div class="card-body row justify-content-between gx-2 gy-3">
            <div class="" style="width: 18rem;">
                <div class="img">
                    <img src="../assets/img/unsplash_LdLI47dOZUU.png" class="card-img-top" alt="...">
                    <!-- Button trigger modal -->
                    <button type="button" class="caption" data-bs-toggle="modal" data-bs-target="#exampleModal1">
                        加入購物車
                    </button>

                    <!-- Modal (彈窗)-->
                    <div class="modal fade " id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel"
                        aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    ...
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary"
                                        data-bs-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary">Save changes</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="description">
                    <p class="card-text text-center">生莓果乳酪</p>
                    <p class="card-text text-center price">NT300</p>
                </div>

            </div>

            <div class="" style="width: 18rem;">
                <div class="img">
                    <img src="../assets/img/unsplash_LdLI47dOZUU.png" class="card-img-top" alt="...">
                    <!-- Button trigger modal -->
                    <button type="button" class="caption" data-bs-toggle="modal" data-bs-target="#exampleModal1">
                        加入購物車
                    </button>
                </div>

                <div class="description">
                    <p class="card-text text-center">生莓果乳酪</p>
                    <p class="card-text text-center price">NT300</p>
                </div>

            </div>

            <div class="card col-3" style="width: 18rem;">
                <img src="../assets/img/unsplash_7JYVKRo7i5Q.png" class="card-img-top" alt="...">
                <p class="card-text text-center">焦糖蘋果乳酪</p>
                <p class="card-text text-center">NT300</p>
            </div>

            <div class="card col-3" style="width: 18rem;">
                <img src="../assets/img/unsplash_GAauSStia3s.png" class="card-img-top" alt="...">
                <p class="card-text text-center">泰奶可可脆片乳酪</p>
                <p class="card-text text-center">NT300</p>
            </div>
            <div class="card col-3" style="width: 18rem;">
                <img src="../assets/img/unsplash_EbRBhZ-I_p8.png" class="card-img-top" alt="...">
                <p class="card-text text-center">藍莓生乳酪</p>
                <p class="card-text text-center">NT300</p>
            </div>
            <div class="card col-3" style="width: 18rem;">
                <img src="../assets/img/unsplash_JBIK4QZOFfc.png" class="card-img-top" alt="...">
                <p class="card-text text-center">黑森林乳酪</p>
                <p class="card-text text-center">NT300</p>
            </div>
            <div class="card col-3" style="width: 18rem;">
                <img src="../assets/img/unsplash_7JYVKRo7i5Q.png" class="card-img-top" alt="...">
                <p class="card-text text-center">焦糖蘋果乳酪</p>
                <p class="card-text text-center">NT300</p>
            </div>
            <div class="card col-3" style="width: 18rem;">
                <img src="../assets/img/unsplash_GAauSStia3s.png" class="card-img-top" alt="...">
                <p class="card-text text-center">泰奶可可脆片乳酪</p>
                <p class="card-text text-center">NT300</p>
            </div>
            <div class="card col-3" style="width: 18rem;">
                <img src="../assets/img/unsplash_G4bhjIpUq9g.png" class="card-img-top" alt="...">
                <p class="card-text text-center">檸檬可可乳酪</p>
                <p class="card-text text-center">NT300</p>
            </div>
            <div class="card col-3" style="width: 18rem;">
                <img src="../assets/img/unsplash_G4bhjIpUq9g.png" class="card-img-top" alt="...">
                <p class="card-text text-center">檸檬可可乳酪</p>
                <p class="card-text text-center">NT300</p>
            </div>
            <div class="card col-3" style="width: 18rem;">
                <img src="../assets/img/unsplash_G4bhjIpUq9g.png" class="card-img-top" alt="...">
                <p class="card-text text-center">檸檬可可乳酪</p>
                <p class="card-text text-center">NT300</p>
            </div>
            <div class="card col-3" style="width: 18rem;">
                <img src="../assets/img/unsplash_G4bhjIpUq9g.png" class="card-img-top" alt="...">
                <p class="card-text text-center">檸檬可可乳酪</p>
                <p class="card-text text-center">NT300</p>
            </div>
        </div>
    </div>


    <div class="container mt-3 ">
        <ul class="pagination justify-content-center">
            <li class="page-item"><a class="page-link  active" href="#">1</a></li>
            <li class="page-item"><a class="page-link" href="#">2</a></li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item"><a class="page-link" href="#">4</a></li>
            <li class="page-item"><a class="page-link" href="#">5</a></li>
            <li class="page-item"><a class="page-link" href="#">></a></li>
        </ul>
    </div>
</template>
