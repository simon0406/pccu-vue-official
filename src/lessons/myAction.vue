<template>
    <div class="myComission">
        <h1 class="myComission__header">My Comission</h1>
        <div class="myComission__buttonGroup">
            <button
                class="buttonGroup__button buttonGroup__button--datePicker"
            >08/05/2019~08/05/2019</button>
            <div class="buttonGroup__dropdown" :ref="`selectCommission`">
                <button @click="isFilterOpen=!isFilterOpen" class="dropdown__button">
                    <span>View &amp; Fiter</span>
                </button>
                <div class="dropdown__layer" :class="{'dropdown__layer--isOpen':isFilterOpen}">
                    <div class="dropdown__container">
                        <h2 class="container__header">View &amp; Fiter</h2>
                        <button class="container__clearAll">Reset</button>
                        <hr class="container__hr" />
                        <h3 class="container__segment">Add filters</h3>
                        <h4 class="container__filterName">Account</h4>
                        <!-- <cardDropdown
                            :id="'accountType'"
                            class="container__filter"
                            :value.sync="currentAccountType"
                            :options="accountTypeOptions"
                            :uniqueKey="'ListID'"
                            :displayKey="'ListName'"
                        ></cardDropdown>
                        <h4 class="container__filterName">Transaction</h4>
                        <cardDropdownCheckboxes
                            :id="'accountType'"
                            class="container__filter"
                            :values.sync="transactionTypes"
                            :options="transactionOptions"
                            :uniqueKey="'value'"
                            :displayKey="'text'"
                            @change="handleOptionsChange($event)"
                        ></cardDropdownCheckboxes>
                        <hr class="container__hr" />
                        <h4 class="container__filterName">Sort by</h4>
                        <cardDropdown
                            :id="'freeType'"
                            class="container__filter"
                            :value.sync="currentSortMethod"
                            :options="sortOptions"
                            :uniqueKey="'value'"
                            :displayKey="'text'"
                            :placeholder="'Transaction Date from'"
                        ></cardDropdown> -->
                    </div>
                </div>
            </div>
        </div>
        <!-- <searchInput class="myComission__search"></searchInput> -->
        <ul class="myComission__table">
            <li class="table__rowItem">
                <ul class="rowItem__tableHeader">
                    <li class="tableHeader__columnItem">
                        <div class="columnItem__attribute columnItem__attribute--account">
                            <span class="attribute__text">Account Number</span>
                            <!-- <img class="attribute__sort" src="@/assets/svg/base.svg" /> -->
                        </div>
                    </li>
                    <id class="tableHeader__columnItem d-none d-768-block">
                        <div class="columnItem__attribute columnItem__attribute--feeType">
                            <span class="attribute__text">Fee Type</span>
                            <!-- <img class="attribute__sort" src="@/assets/svg/base.svg" /> -->
                        </div>
                    </id>
                    <li class="tableHeader__columnItem d-none d-768-block">
                        <div class="columnItem__attribute columnItem__attribute--remuneration">
                            <div class="remuneration__primary">
                                <span class="attribute__text">Remuneration ($USD)</span>
                                <!-- <img class="attribute__sort" src="@/assets/svg/base.svg" /> -->
                            </div>
                            <span class="remuneration__secondary d-1210-none">PayDate</span>
                        </div>
                    </li>
                    <li class="tableHeader__columnItem d-none d-768-block">
                        <div class="columnItem__attribute columnItem__attribute--payDate">
                            <span class="attribute__text">Pay Date</span>
                            <!-- <img class="attribute__sort" src="@/assets/svg/base.svg" /> -->
                        </div>
                    </li>
                    <li class="tableHeader__columnItem d-none d-768-block">
                        <div class="columnItem__attribute columnItem__attribute--status">
                            <span class="attribute__text">Status</span>
                            <!-- <img class="attribute__sort" src="@/assets/svg/base.svg" /> -->
                        </div>
                    </li>
                </ul>
            </li>
            <template v-for="(account, index) in 5">
                <li class="table__rowItem" :key="index">
                    <ul class="rowItem__tableBody">
                        <li class="tableBody__columnItem">
                            <div class="columnItem__attribute columnItem__attribute--account">
                                <div class="account__title">
                                    <img
                                        class="title__icon"
                                        
                                    />
                                    <span class="title__accountId">NB1200202</span>
                                </div>
                                <span class="account__contributionFee d-768-none">Contribution Fee</span>
                                <span class="account__amount d-768-none">USD $ 342.98</span>
                                <span class="account__payDate d-768-none">Pay date: Jan 05, 2020</span>
                                <span class="account__Status d-768-none">Pending</span>
                                <span
                                    class="account__name d-none d-768-block"
                                >Josh Cheung, Lucie Kwan, Chien Hong</span>
                            </div>
                        </li>
                        <li class="tableBody__columnItem d-none d-768-block">
                            <div
                                class="columnItem__attribute columnItem__attribute--feeType"
                            >Establishment Fee</div>
                        </li>
                        <li class="tableBody__columnItem d-none d-768-block">
                            <div class="columnItem__attribute columnItem__attribute--remuneration">
                                <span class="remuneration__primary">$20,000.00</span>
                                <span class="remuneration__secondary d-1210-none">Jan 05, 2020</span>
                            </div>
                        </li>
                        <li class="tableBody__columnItem d-none d-768-block">
                            <div class="columnItem__attribute columnItem__attribute--payDate">
                                <span>Dec 05, 2020</span>
                            </div>
                        </li>
                        <li class="tableBody__columnItem d-none d-768-block">
                            <div class="columnItem__attribute columnItem__attribute--status">
                                <span>Pending</span>
                            </div>
                        </li>
                    </ul>
                </li>
            </template>
        </ul>
        <!-- <div class="myComission__pagination">
            <pagination class="pagination__pagination" :currentPage.sync="currentPage"></pagination>
            <paginationSize
                class="pagination__paginationSize"
                :currentPageSize.sync="currentPageSize"
            ></paginationSize>
        </div> -->
    </div>
</template>
<script>
// import searchInput from '@/components/baseInput/searchInput.vue'
// import pagination from '@/components/pagination.vue'
// import paginationSize from '@/components/paginationSize.vue'
// import cardDropdown from '@/components/cardDropdown.vue'
// import cardDropdownCheckboxes from '@/components/cardDropdownCheckboxes.vue'
// import { mapActions } from 'vuex';
export default {
    components: {
        // searchInput,
        // cardDropdown,
        // cardDropdownCheckboxes,
        // pagination,
        // paginationSize,
    },
    data: () => ({
        // Filter
        isFilterOpen: false,
        currentAccountType: '',
        accountTypeOptions: [
            {
                text: '1',
                value: ''
            },
            {
                text: '2',
                value: '2'
            },
            {
                text: '3',
                value: '3'
            }
        ],
        transactionTypes: [],
        transactionOptions: [
            {
                value: '0',
                text: 'Deposit'
            },
            {
                value: '1',
                text: 'Buy'
            },
            {
                value: '2',
                text: 'Sell'
            },
            {
                value: '3',
                text: 'Transfer-in Specie'
            },
            {
                value: '4',
                text: 'Dividend'
            },
            {
                value: '5',
                text: 'Fee'
            },
            {
                value: '6',
                text: 'Interest'
            },
            {
                value: '7',
                text: 'Others'
            }
        ],
        currentSortMethod: '',
        sortOptions: [
            {
                value: '0',
                text: 'Deposit'
            },
            {
                value: '1',
                text: 'Buy'
            },
            {
                value: '2',
                text: 'Sell'
            },
            {
                value: '3',
                text: 'Transfer-in Specie'
            },
        ],
        // Pagination
        currentPage: 0,
        currentPageSize: 10,
    }),
    async mounted() {
        // // Add Event
        // document.addEventListener("click", this.detectClickOutside);
        // // Request Data
        // const response = await this.getFeeItemList({
        //     id: `IFA001`
        // });
        // const manyFeeLists = response.Datas;
        // const { FeeItemList, LumpsumFeeItemList, RSPFeeItemList } = manyFeeLists
        // const allFeeItems = [...FeeItemList, ...LumpsumFeeItemList, ...RSPFeeItemList]
        // this.typeOptions = allFeeItems

        // const accountTypeData = await this.getOptionList({
        //     id: "1005/N"
        // });
        // this.accountTypeOptions = accountTypeData.Datas.OptionList
    },
    destroyed() {
        // Add Event
        document.removeEventListener("click", this.detectClickOutside);
    },
    methods: {
        handleOptionsChange(options) {
            console.log({
                options
            })
        },
        detectClickOutside(event) {
            const select = this.$refs[`selectCommission`];
            const isClickInside = select.contains(event.target);
            if (!isClickInside) {
                this.isFilterOpen = false;
            }
        },
        // ...mapActions(["getFeeItemList", "getOptionList"])
    }
}
</script>
<style lang="scss" scoped>
.myComission {
    position: relative;
}
.myComission__header {
    font-size: 24px;
    font-weight: bold;
}
.myComission__buttonGroup {
    display: flex;
    margin-top: 24px;
    .buttonGroup__button {
        border-radius: 4px;
        box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.05);
        border: solid 1px rgba(151, 151, 151, 0.2);
        background-color: #ffffff;
        padding: 12px;
        font-size: 14px;
        color: #414042;
        opacity: 0.9;
        font-weight: bold;
    }
    .buttonGroup__button--filter {
        margin-left: 16px;
    }
    .buttonGroup__dropdown {
        margin-left: 16px;
        position: relative;
        .dropdown__button {
            border-radius: 4px;
            box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.05);
            border: solid 1px rgba(151, 151, 151, 0.2);
            background-color: #ffffff;
            padding: 12px;
            display: flex;
            .button__icon {
                width: 16px;
                margin-left: 8px;
            }
        }
        .dropdown__layer {
            position: absolute;
            right: 0;
            top: 100%;
            min-width: 286px;
            z-index: 20;
            display: block;
            max-height: 0px;
            overflow: hidden;
            transition: all 0.2s;
            width: 100%;
            margin-top: 4px;
        }
        .dropdown__layer--isOpen {
            display: block;
            max-height: 1000px;
            overflow: unset;
        }
        .dropdown__container {
            background-color: white;
            border-radius: 4px;
            box-shadow: 1px 1px 10px 1px rgba(72, 107, 255, 0.05);
            border: solid 1px #d7dbf8;
            padding: 16px 24px;
            position: relative;
            .container__header {
                font-size: 16px;
                font-weight: bold;
                color: #414042;
            }
            .container__segment {
                font-size: 14px;
                font-weight: bold;
                color: #414042;
                margin-top: 16px;
            }
            .container__clearAll {
                position: absolute;
                top: 16px;
                right: 24px;
                font-size: 14px;
                color: #a09fa0;
            }
            .container__filterName {
                font-size: 12px;
                font-weight: bold;
                color: #414042;
                margin-top: 24px;
            }
            .container__filter {
                margin-top: 2px;
            }
            .container__hr {
                margin-top: 16px;
                border-color: #d7dbf8;
            }
        }
    }
}

.myComission__search {
    margin-top: 45px;
}
.myComission__table {
    margin-top: 8px;
    .table__rowItem {
        border-bottom: 1px solid rgba(155, 155, 155, 0.2);
        padding: 12px 0 10px 0;
        .tableHeader__columnItem {
            .columnItem__attribute {
                font-size: 13px;
                font-weight: bold;
            }
        }
        .tableBody__columnItem {
            .columnItem__attribute--account {
                display: flex;
                flex-direction: column;
                position: relative;
                color: #414042;
                .account__title {
                    display: flex;
                    .title__accountId {
                        margin-left: 10px;
                        font-size: 15px;
                    }
                }
                .account__contributionFee {
                    margin-left: 24px;
                    margin-top: 16px;
                    opacity: 0.5;
                    font-size: 13px;
                }
                .account__amount {
                    margin-left: 24px;
                    margin-top: 8px;
                    opacity: 0.9;
                    font-size: 17px;
                    font-weight: bold;
                }
                .account__payDate {
                    margin-left: 24px;
                    margin-top: 8px;
                    opacity: 0.5;
                    font-size: 13px;
                }
                .account__Status {
                    position: absolute;
                    top: 0px;
                    right: 0px;
                    opacity: 0.5;
                    font-size: 13px;
                }
            }
        }
    }
    .columnItem__attribute {
        display: flex;
        .attribute__text {
            font-size: 13px;
            font-weight: bold;
            align-self: center;
        }
        .attribute__sort {
            margin-left: 4px;
            align-self: center;
        }
    }
}
.pagination__pagination {
    max-width: 224px;
    margin: 40px auto auto auto;
}
.pagination__paginationSize {
    max-width: 224px;
    margin: 16px auto auto auto;
}

@media screen and (min-width: 768px) {
    .myComission__buttonGroup {
        position: absolute;
        top: 0;
        right: 0;
        margin: unset;
    }
    .myComission__table {
        .table__rowItem {
            .rowItem__tableHeader {
                display: flex;
            }
            .rowItem__tableBody {
                display: flex;
            }
        }
        /* 不分header body 的寬度控制 */
        .columnItem__attribute--account {
            width: 15rem;
        }
        .columnItem__attribute--feeType {
            width: 9rem;
        }
        .columnItem__attribute--remuneration {
            width: 12rem;
        }
        .columnItem__attribute--status {
            width: 9rem;
        }
        .columnItem__attribute--payDate {
            width: 6rem;
            margin-left: 3rem;
        }
        /* header內容的詳細控制 */
        .tableHeader__columnItem {
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            font-weight: bold;
            .columnItem__attribute--remuneration {
                display: flex;
                flex-direction: column;
                .remuneration__primary {
                    display: flex;
                    justify-content: flex-end;
                }
                .remuneration__secondary {
                    text-align: right;
                    font-size: 12px;
                    opacity: 0.4;
                    color: #414042;
                    margin-top: 4px;
                }
            }
            .columnItem__attribute--status {
                display: flex;
                justify-content: flex-end;
            }
            .columnItem__attribute--payDate {
                display: flex;
                // justify-content: flex-end;
            }
        }
        /* body內容的詳細style */
        .tableBody__columnItem {
            display: flex;
            flex-direction: column;
            justify-content: center;
            .columnItem__attribute--account {
                .account__title {
                    font-weight: bold;
                }
                .account__name {
                    opacity: 0.65;
                    font-size: 12px;
                    margin-top: 8px;
                }
            }
            .columnItem__attribute--feeType {
                height: 16px;
                font-size: 14px;
                color: #414042;
            }
            .columnItem__attribute--remuneration {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                font-size: 14px;
                text-align: right;
                .remuneration__primary {
                    opacity: 0.9;
                    font-size: 14px;
                    font-weight: bold;
                    color: #414042;
                }
                .remuneration__secondary {
                    opacity: 0.5;
                    font-size: 13px;
                    color: #414042;
                    margin-top: 8px;
                }
            }
            .columnItem__attribute--status {
                display: flex;
                justify-content: flex-end;
            }
            .columnItem__attribute--payDate {
                display: flex;
                // justify-content: flex-end;
                font-size: 14px;
                color: #414042;
            }
        }
    }
    .pagination__paginationSize {
        position: absolute;
        right: 0;
        bottom: 0;
    }
}

@media screen and (min-width: 1210px) {
    .myComission__pagination {
        display: flex;
        justify-content: space-between;
        margin: 40px auto auto auto;
        .pagination__pagination {
            max-width: 500px;
            position: relative;
            margin: unset;
        }
        .pagination__paginationSize {
            max-width: unset;
            position: relative;
            margin: unset;
        }
    }
    .myComission__table {
        /* 不分header body 的寬度控制 */
        .columnItem__attribute--account {
            width: 15rem;
        }
        .columnItem__attribute--feeType {
            width: 9rem;
        }
        .columnItem__attribute--remuneration {
            width: 12rem;
        }
        .columnItem__attribute--status {
            width: 9rem;
        }
        .tableBody__columnItem {
            .columnItem__attribute--remuneration {
                .remuneration__primary {
                    font-weight: normal;
                }
            }
        }
    }
}
.d-none {
  display: none;
}
.d-block {
  display: block;
}
.d-flex {
  display: flex;
}

.d-flex-center {
  display: flex;
  justify-content: center;
}
.d-flex-between {
  display: flex;
  justify-content: space-between;
}
.d-flex-end {
  display: flex;
  justify-content: flex-end;
}
.d-flex-start {
  display: flex;
  justify-content: flex-start;
}

@media screen and (min-width: 768px) {
  .d-768-block {
    display: block;
  }
  .d-768-none {
    display: none;
  }
  .d-md-block {
    display: block;
  }
  .d-md-flex {
    display: flex;
  }
  .d-md-none {
    display: none;
  }
  .d-md-cell {
    display: table-cell;
  }
  .d-768-grid {
    display: grid;
  }
  .d-768-flex {
    display: flex;
  }
}

@media screen and (min-width: 1210px) {
  .d-1210-flex {
    display: flex;
  }
  .d-1210-grid {
    display: grid;
  }
  .d-1210-none {
    display: none;
  }
  .d-1210-block {
    display: block;
  }
}




</style>

