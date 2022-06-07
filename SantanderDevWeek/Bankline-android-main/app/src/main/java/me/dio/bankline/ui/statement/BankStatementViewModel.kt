package me.dio.bankline.ui.statement

import androidx.lifecycle.ViewModel
import me.dio.bankline.data.BanklineRepository
import java.util.*

class BankStatementViewModel : ViewModel () {

    fun findBanklineStatement(accountHolderId: Int) =
        BanklineRepository.findBankStatement(accountHolderId)
}