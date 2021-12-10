package com.codingdojo.booksapi.contollers;

import java.util.List;

import javax.validation.Valid;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import com.codingdojo.booksapi.models.Book;
import com.codingdojo.booksapi.services.BookService;

@Controller
public class HomeController {
    private final BookService bookService;

    public HomeController(BookService bookService) {
        this.bookService = bookService;
    }


    @RequestMapping("/books")
    public String index(Model model) {
        List<Book> books = bookService.allBooks();
        model.addAttribute("books", books);
        return "index.jsp";
    }

    @RequestMapping("/books/new")
    public String newBook(@ModelAttribute("book") Book book) {
        return "newBook.jsp";
    }

    @RequestMapping("/onebook/{id}")
    public String oneBook(@PathVariable("id") Long id, Model model) {
    	model.addAttribute("book", bookService.findBook(id));
        return "oneBook.jsp";
    }

    @RequestMapping(value="/books", method=RequestMethod.POST)
    public String create(@Valid @ModelAttribute("book") Book book, 
                                        BindingResult result) {
        if (result.hasErrors()) {
            return "newBook.jsp";
        } else {
            bookService.createBook(book);
            return "redirect:/books";
        }
    }
}